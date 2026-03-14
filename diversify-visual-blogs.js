import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const arrayStart = content.indexOf('[');
const arrayString = content.substring(arrayStart, content.lastIndexOf(']') + 1);

const getBlogs = new Function(`return ${arrayString}`);
const blogs = getBlogs();

const diverseTopics = [
  { industry: 'Automotive', nodeType: 'Background Replacement', variant: 'rugged off-road terrain' },
  { industry: 'Fashion & Apparel', nodeType: 'Style Transfer', variant: 'high-fashion editorial look' },
  { industry: 'Food & Beverage', nodeType: 'Product Placement', variant: 'rustic farmhouse kitchen' },
  { industry: 'Real Estate', nodeType: 'Lighting Adjustment', variant: 'golden hour sunset glow' },
  { industry: 'Consumer Electronics', nodeType: 'Background Replacement', variant: 'futuristic cyberpunk city' },
  { industry: 'Furniture & Home Decor', nodeType: 'Product Placement', variant: 'modern minimalist living room' },
  { industry: 'Jewelry & Watches', nodeType: 'Image Enhancement', variant: 'macro detail with sparkling reflections' },
  { industry: 'Footwear', nodeType: 'Background Replacement', variant: 'urban street style environment' },
  { industry: 'Travel & Hospitality', nodeType: 'Style Transfer', variant: 'vintage cinematic film aesthetic' },
  { industry: 'Fitness & Sports', nodeType: 'Product Placement', variant: 'high-energy gym setting' }
];

let visualIndex = 0;

for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].category === 'Visual Content Generation' && visualIndex < diverseTopics.length) {
        const topic = diverseTopics[visualIndex];
        const industry = topic.industry;
        const nodeType = topic.nodeType;
        const variant = topic.variant;
        
        blogs[i].title = `Ultimate Guide to ${nodeType} in ${industry} for ${variant}`;
        blogs[i].slug = `ultimate-guide-to-${nodeType.toLowerCase().replace(/ /g, '-')}-in-${industry.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}-for-${variant.toLowerCase().replace(/ /g, '-')}`;
        blogs[i].excerpt = `Learn about ${nodeType} for ${industry} in a ${variant} context. Discover the exact AI prompts to use and scale your visual content generation.`;
        
        blogs[i].content = `Welcome to our deep dive on **${nodeType}** for the **${industry}** industry, specifically tailored for a **${variant}** context.

### The Use Case
When working with ${industry.toLowerCase()} visuals, it's critical to get the aesthetics right. In this guide, we provide 3 distinct prompts to help you generate the perfect visual content.

### Prompt 1: The Standard Approach
This prompt focuses on the core requirement:
*Execute ${nodeType.toLowerCase()} maintaining subject integrity and perspective for ${industry.toLowerCase()} in a ${variant} context.*

Here is the JSON prompt you can use to generate this specific result:
\`\`\`json
{
  "industry": "${industry}",
  "node_type": "${nodeType}",
  "variant": "${variant}",
  "instruction": "Execute ${nodeType.toLowerCase()} maintaining subject integrity and perspective for ${industry.toLowerCase()} in a ${variant} context.",
  "lighting": "match existing scene",
  "quality": "commercial premium",
  "output": "photorealistic, no artifacts"
}
\`\`\`

### Prompt 2: The Creative Twist
This prompt adds a creative element to the standard approach, perfect for social media or engaging campaigns:
*Generate a dynamic and creative ${nodeType.toLowerCase()} that highlights the ${industry.toLowerCase()} subject's unique features in a ${variant} setting.*

Here is the JSON prompt for the creative variation:
\`\`\`json
{
  "industry": "${industry}",
  "node_type": "${nodeType}",
  "variant": "${variant} - Creative",
  "instruction": "Generate a dynamic and creative ${nodeType.toLowerCase()} that highlights the ${industry.toLowerCase()} subject's unique features in a ${variant} setting.",
  "lighting": "dramatic, high contrast",
  "quality": "commercial premium, artistic",
  "output": "photorealistic, engaging, vibrant colors"
}
\`\`\`

### Prompt 3: The Minimalist Focus
This prompt strips away distractions, focusing entirely on the subject in a clean, minimalist environment:
*Create a minimalist ${nodeType.toLowerCase()} that emphasizes the ${industry.toLowerCase()} subject with clean lines and subtle lighting in a ${variant} context.*

Here is the JSON prompt for the minimalist variation:
\`\`\`json
{
  "industry": "${industry}",
  "node_type": "${nodeType}",
  "variant": "${variant} - Minimalist",
  "instruction": "Create a minimalist ${nodeType.toLowerCase()} that emphasizes the ${industry.toLowerCase()} subject with clean lines and subtle lighting in a ${variant} context.",
  "lighting": "soft, diffused, natural",
  "quality": "commercial premium, clean",
  "output": "photorealistic, minimalist, uncluttered"
}
\`\`\`

### Ready to Elevate Your Visuals?
If you're looking to implement these AI-driven visual enhancements for your brand, visit [www.minionarts.com](https://www.minionarts.com) to get started today.`;
        
        visualIndex++;
    }
}

const interfacePart = `export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  keyword: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}

export const blogs: BlogPost[] = `;

const newContent = interfacePart + JSON.stringify(blogs, null, 2) + ';\n';
fs.writeFileSync(filePath, newContent);
console.log(`Updated ${visualIndex} visual blogs with diverse topics.`);

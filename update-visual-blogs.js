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

let visualBlogsCount = 0;

for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].category === 'Visual Content Generation') {
        const blog = blogs[i];
        const industry = blog.title.match(/in (.*?) for/)?.[1] || 'Skincare/Beauty';
        const nodeType = blog.title.match(/Guide to (.*?) in/)?.[1] || 'Background Replacement';
        const variant = blog.title.match(/for (.*)$/)?.[1] || 'luxury premium brand context';
        
        blog.content = `Welcome to our deep dive on **${nodeType}** for the **${industry}** industry, specifically tailored for a **${variant}**.

### The Use Case
When working with ${industry.toLowerCase()} products, it's critical to get the visuals right. In this guide, we provide 3 distinct prompts to help you generate the perfect visual content.

### Prompt 1: The Standard Approach
This prompt focuses on the core requirement:
*Replace existing background with premium environment maintaining subject lighting and perspective for ${industry.toLowerCase()} product in ${variant} context.*

Here is the JSON prompt you can use to generate this specific result:
\`\`\`json
{
  "industry": "${industry}",
  "node_type": "${nodeType}",
  "variant": "${variant}",
  "instruction": "Replace existing background with premium environment maintaining subject lighting and perspective for ${industry.toLowerCase()} product in ${variant} context.",
  "lighting": "match existing scene",
  "quality": "commercial premium",
  "output": "photorealistic, no artifacts"
}
\`\`\`

### Prompt 2: The Creative Twist
This prompt adds a creative element to the standard approach, perfect for social media or engaging campaigns:
*Generate a dynamic and creative background replacement that highlights the ${industry.toLowerCase()} product's unique features in a ${variant} setting.*

Here is the JSON prompt for the creative variation:
\`\`\`json
{
  "industry": "${industry}",
  "node_type": "${nodeType}",
  "variant": "${variant} - Creative",
  "instruction": "Generate a dynamic and creative background replacement that highlights the ${industry.toLowerCase()} product's unique features in a ${variant} setting.",
  "lighting": "dramatic, high contrast",
  "quality": "commercial premium, artistic",
  "output": "photorealistic, engaging, vibrant colors"
}
\`\`\`

### Prompt 3: The Minimalist Focus
This prompt strips away distractions, focusing entirely on the product in a clean, minimalist environment:
*Create a minimalist background replacement that emphasizes the ${industry.toLowerCase()} product with clean lines and subtle lighting in a ${variant} context.*

Here is the JSON prompt for the minimalist variation:
\`\`\`json
{
  "industry": "${industry}",
  "node_type": "${nodeType}",
  "variant": "${variant} - Minimalist",
  "instruction": "Create a minimalist background replacement that emphasizes the ${industry.toLowerCase()} product with clean lines and subtle lighting in a ${variant} context.",
  "lighting": "soft, diffused, natural",
  "quality": "commercial premium, clean",
  "output": "photorealistic, minimalist, uncluttered"
}
\`\`\`

### Ready to Elevate Your Visuals?
If you're looking to implement these AI-driven visual enhancements for your brand, visit [www.minionarts.com](https://www.minionarts.com) to get started today.`;
        
        visualBlogsCount++;
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
console.log(`Updated ${visualBlogsCount} visual blogs with 3 prompts each.`);

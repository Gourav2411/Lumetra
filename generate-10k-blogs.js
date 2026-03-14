import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const industries = [
  "Skincare/Beauty", "Apparel/Fashion", "Shoes/Footwear",
  "Food & Beverage", "Jewellery", "Home Decor"
];

const nodeTypes = [
  "Background Replacement", "Product Placement", "Virtual Try-On",
  "Footwear Swap", "Model Swap", "Lighting Enhancement",
  "Scene Composite", "Multi-Node Ad", "Before/After Node", "Color Grading"
];

const variants = [
  "luxury premium brand context", "D2C ecommerce product listing",
  "social media ad creative", "print campaign editorial",
  "performance marketing variant", "festive seasonal campaign",
  "influencer collaboration content"
];

const strategies = [
  "Ultimate Guide to", "Best Practices for", "How to Master",
  "5 Tips for", "The Future of", "Why You Need",
  "Maximizing ROI with", "Step-by-Step Guide to", "Advanced Techniques for",
  "Beginner's Guide to", "Case Study: Success with", "Common Mistakes in",
  "The ROI of", "Scaling Your Brand with", "Unlocking Growth via",
  "The Strategic Advantage of", "Innovative Approaches to", "A Deep Dive into",
  "Quick Wins with", "Transforming Campaigns with", "The Secret to",
  "Proven Strategies for", "Elevating Your Brand via", "The Essential Guide to"
];

const instructions = {
  "Background Replacement": "Replace existing background with premium environment maintaining subject lighting and perspective",
  "Product Placement": "Insert product naturally into scene with correct scale, lighting direction and realistic shadows",
  "Virtual Try-On": "Replace clothing on model with provided apparel preserving pose, proportions and fabric folds",
  "Footwear Swap": "Replace current footwear with product ensuring realistic alignment, correct shadowing and lighting",
  "Model Swap": "Replace model while preserving outfit, lighting, pose and scene composition",
  "Lighting Enhancement": "Enhance product lighting with cinematic rim light, fill and key light adjustments",
  "Scene Composite": "Composite product into lifestyle scene with matched perspective, shadows and ambient light",
  "Multi-Node Ad": "Chain: background gen → product placement → lighting enhancement → brand overlay",
  "Before/After Node": "Generate split-frame before and after with consistent lighting, model and product placement",
  "Color Grading": "Apply cinematic color grade to scene: warm/cool/luxury/lifestyle tone variants"
};

let newBlogs = [];
let id = 10000; // Start from 10000 to avoid conflicts
let startDate = new Date('2024-05-01T08:00:00Z');

for (const strategy of strategies) {
  for (const industry of industries) {
    for (const nodeType of nodeTypes) {
      for (const variant of variants) {
        if (newBlogs.length >= 10000) break;

        const title = `${strategy} ${nodeType} in ${industry} for ${variant}`;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + id;
        const keyword = `${nodeType.toLowerCase()} ${industry.toLowerCase()}`;
        const excerpt = `Learn about ${nodeType} for ${industry} in a ${variant}. Discover the exact AI prompt to use and scale your visuals.`;

        const instruction = instructions[nodeType] + ` for ${industry.toLowerCase()} product in ${variant} context.`;

        const promptObj = {
          industry: industry,
          node_type: nodeType,
          variant: variant,
          instruction: instruction,
          lighting: "match existing scene",
          quality: "commercial premium",
          output: "photorealistic, no artifacts"
        };

        const content = `Welcome to our deep dive on **${nodeType}** for the **${industry}** industry, specifically tailored for a **${variant}**.

### The Use Case
When working with ${industry.toLowerCase()} products, it's critical to get the visuals right. This prompt focuses on:
*${instruction}*

### The Prompt
Here is the JSON prompt you can use to generate this specific result:
\`\`\`json
${JSON.stringify(promptObj, null, 2)}
\`\`\`

### Ready to Elevate Your Visuals?
If you're looking to implement these AI-driven visual enhancements for your brand, visit [www.minionarts.com](https://www.minionarts.com) to get started today.`;

        const postDate = new Date(startDate.getTime() + (id * 2 * 60 * 60 * 1000)); // Add 2 hours per post
        const dateString = postDate.toISOString().split('T')[0];

        newBlogs.push({
          id: id,
          date: dateString,
          title: title,
          slug: slug,
          keyword: keyword,
          excerpt: excerpt,
          content: content
        });

        id++;
      }
    }
  }
}

const jsonFilePath = path.join(__dirname, 'src', 'data', 'generated-blogs.json');
fs.writeFileSync(jsonFilePath, JSON.stringify(newBlogs, null, 2));
console.log(`Successfully generated ${newBlogs.length} blogs in generated-blogs.json.`);

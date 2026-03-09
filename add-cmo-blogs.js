import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsFilePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let blogsContent = fs.readFileSync(blogsFilePath, 'utf-8');

const prefixes = [
  "The Ultimate Guide to",
  "Why Your Business Needs",
  "How to Scale with",
  "The ROI of",
  "Common Misconceptions About",
  "Best Practices for Working with",
  "The Future of Marketing:",
  "Maximizing Growth with",
  "The Strategic Advantage of",
  "Unlocking Revenue Potential via"
];

const topics = [
  "a Fractional CMO",
  "Outsourced Marketing Leadership",
  "Part-Time CMO Services",
  "Fractional Marketing Executives",
  "a B2B Fractional CMO",
  "an E-commerce Fractional CMO",
  "Fractional CMO Consulting",
  "a SaaS Fractional CMO",
  "Data-Driven Fractional CMOs",
  "Fractional Chief Marketing Officers"
];

let newBlogs = [];
let id = 101; // Assuming previous was 100
const startDate = new Date('2024-04-11T08:00:00Z'); // Start after the first 100

for (let i = 0; i < prefixes.length; i++) {
  for (let j = 0; j < topics.length; j++) {
    const title = `${prefixes[i]} ${topics[j]}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const keyword = topics[j].replace(/^(a |an )/i, '');
    const excerpt = `Discover ${title.toLowerCase()} and how it can transform your marketing strategy. Learn the key benefits and implementation strategies for your business.`;
    
    const content = `Welcome to our comprehensive guide on **${title}**. As companies look to scale their marketing efforts efficiently, understanding the role of ${topics[j].toLowerCase()} is critical for driving revenue and maintaining a competitive edge.

### The Changing Landscape of Marketing Leadership

In today's fast-paced digital environment, full-time executive leadership isn't always the most cost-effective or agile solution for growing brands. This is where the fractional model shines. By bringing in seasoned expertise on a part-time or contract basis, companies can access top-tier talent without the overhead of a full-time C-suite executive.

### Key Benefits

* **Cost Efficiency:** Access executive-level strategy at a fraction of the cost of a full-time hire.
* **Objective Perspective:** Bring in an outsider's view to identify blind spots and untapped opportunities.
* **Agility and Speed:** Quickly pivot strategies and implement new initiatives with an experienced leader at the helm.
* **Specialized Expertise:** Leverage deep industry knowledge tailored to your specific growth stage.
* **Scalability:** Easily adjust the level of engagement as your business needs evolve.

### How It Works

A successful engagement typically begins with a comprehensive audit of your current marketing infrastructure, team, and performance metrics. From there, the fractional leader develops a strategic roadmap, aligns the team, and oversees execution to ensure measurable results.

### Learn More
To dive deeper into our executive advisory and fractional CMO services, visit the [Lumetra Home Page](https://www.lumetraanalytics.com/).
`;

    const postDate = new Date(startDate.getTime() + ((id - 100) * 24 * 60 * 60 * 1000));
    const dateString = postDate.toISOString().split('T')[0];

    newBlogs.push(`  {
    "id": ${id},
    "date": "${dateString}",
    "title": "${title}",
    "slug": "${slug}",
    "keyword": "${keyword}",
    "excerpt": "${excerpt}",
    "content": ${JSON.stringify(content)}
  }`);
    id++;
  }
}

// Find the end of the blogs array
const arrayEndIndex = blogsContent.lastIndexOf('];');
if (arrayEndIndex !== -1) {
  // Check if there's a trailing comma on the last element
  const beforeEnd = blogsContent.substring(0, arrayEndIndex).trim();
  const needsComma = !beforeEnd.endsWith(',');
  
  const insertString = (needsComma ? ',\n' : '\n') + newBlogs.join(',\n') + '\n';
  
  const updatedContent = blogsContent.substring(0, arrayEndIndex) + insertString + blogsContent.substring(arrayEndIndex);
  fs.writeFileSync(blogsFilePath, updatedContent);
  console.log('Successfully added 100 Fractional CMO blogs.');
} else {
  console.error('Could not find the end of the blogs array.');
}

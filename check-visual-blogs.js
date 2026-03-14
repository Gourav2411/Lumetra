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

const visualBlogs = blogs.filter(b => b.category === 'Visual Content Generation');
console.log(`Found ${visualBlogs.length} visual blogs.`);
for (let i = 0; i < Math.min(3, visualBlogs.length); i++) {
    console.log(`Blog ${i+1}: ${visualBlogs[i].title}`);
    console.log(`Content: ${visualBlogs[i].content.substring(0, 200)}...`);
}

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
console.log(visualBlogs[0].content);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const arrayStart = content.indexOf('[');
const arrayString = content.substring(arrayStart, content.lastIndexOf(']') + 1);

// Evaluate the array
const getBlogs = new Function(`return ${arrayString}`);
const blogs = getBlogs();

let visualContentCount = 0;
const filteredBlogs = blogs.filter(blog => {
    if (blog.category === 'Visual Content Generation') {
        if (visualContentCount < 10) {
            visualContentCount++;
            return true;
        }
        return false;
    }
    return true;
});

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

const newContent = interfacePart + JSON.stringify(filteredBlogs, null, 2) + ';\n';
fs.writeFileSync(filePath, newContent);
console.log(`Reduced blogs from ${blogs.length} to ${filteredBlogs.length}. Kept ${visualContentCount} Visual Content Generation blogs.`);

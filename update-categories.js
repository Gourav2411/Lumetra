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

blogs.forEach((blog) => {
    if (blog.id >= 10000) {
        blog.category = 'Visual Content Generation';
    } else {
        const titleLower = blog.title.toLowerCase();
        if (titleLower.includes('cmo') || titleLower.includes('chief marketing officer') || titleLower.includes('leadership') || titleLower.includes('executive')) {
            blog.category = 'Fractional CMO';
        } else {
            blog.category = 'Analytics';
        }
    }
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

const newContent = interfacePart + JSON.stringify(blogs, null, 2) + ';\n';
fs.writeFileSync(filePath, newContent);
console.log('Categories updated successfully.');

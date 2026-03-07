import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.lumetraanalytics.com';

// Static routes
const staticRoutes = [
  '',
  '/services',
  '/about',
  '/case-studies',
  '/diagnostic',
  '/book-call',
  '/blog',
  '/tools',
  '/tools/digital-strategy',
  '/contact',
  '/privacy-policy'
];

// Read blogs.ts to extract slugs
const blogsFilePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
const blogsContent = fs.readFileSync(blogsFilePath, 'utf-8');

// Simple regex to find all slugs
const slugRegex = /"slug":\s*"([^"]+)"/g;
let match;
const blogSlugs = [];

while ((match = slugRegex.exec(blogsContent)) !== null) {
  blogSlugs.push(match[1]);
}

const today = new Date().toISOString().split('T')[0];

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static routes
staticRoutes.forEach(route => {
  sitemapContent += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

// Add blog routes
blogSlugs.forEach(slug => {
  sitemapContent += `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
});

sitemapContent += `</urlset>`;

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log('Sitemap generated successfully at public/sitemap.xml');

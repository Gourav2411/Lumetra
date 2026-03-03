/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Diagnostic } from './pages/Diagnostic';
import { BookCall } from './pages/BookCall';
import { Contact } from './pages/Contact';
import { CaseStudies } from './pages/CaseStudies';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="diagnostic" element={<Diagnostic />} />
          <Route path="book-call" element={<BookCall />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

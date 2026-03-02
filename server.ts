import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Path B: Optional Next.js/Express API route for Lead Capture
  app.post('/api/lead', async (req, res) => {
    try {
      const payload = req.body;
      
      // Basic validation
      if (!payload.fullName || !payload.email || !payload.company) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      console.log('[Backend API] Received lead submission:', payload);

      const googleSheetsUrl = process.env.VITE_GOOGLE_SHEETS_WEBAPP_URL;

      if (googleSheetsUrl) {
        // Forward to Google Apps Script
        const response = await fetch(googleSheetsUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Google Sheets API responded with status: ${response.status}`);
        }
        
        console.log('[Backend API] Successfully forwarded to Google Sheets');
      } else {
        console.log('[Backend API] VITE_GOOGLE_SHEETS_WEBAPP_URL not set. Simulating success.');
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('[Backend API] Error processing lead:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

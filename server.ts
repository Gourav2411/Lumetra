import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

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

  // AI Generation Route
  app.post('/api/ai/generate', async (req, res) => {
    try {
      const { provider, model, systemPrompt, userPrompt, apiKey } = req.body;

      if (!provider || !model || !systemPrompt || !userPrompt || !apiKey) {
        return res.status(400).json({ error: 'Missing required fields, including API Key.' });
      }

      if (provider === 'Gemini') {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: model,
          contents: userPrompt,
          config: {
            systemInstruction: systemPrompt,
          }
        });
        return res.json({ text: response.text || 'No response generated.' });
      } else if (provider === 'OpenAI') {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: model,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt }
            ]
          })
        });
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        return res.json({ text: data.choices[0].message.content });
      } else if (provider === 'Anthropic') {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
          },
          body: JSON.stringify({
            model: model,
            max_tokens: 4096,
            system: systemPrompt,
            messages: [
              { role: 'user', content: userPrompt }
            ]
          })
        });
        const data = await response.json();
        if (data.error) throw new Error(data.error.message);
        return res.json({ text: data.content[0].text });
      } else {
        return res.status(400).json({ error: 'Invalid provider selected.' });
      }
    } catch (error: any) {
      console.error('[Backend API] Error generating AI content:', error);
      res.status(500).json({ error: error.message || 'Internal server error' });
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

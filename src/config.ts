export const config = {
  // Path A: Google Apps Script Web App URL
  GOOGLE_SHEETS_WEBAPP_URL: import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL || 'https://script.google.com/macros/s/AKfycby_17YHI4xB7ZOD7GiZY6Df_Zv-dDNMY_XdbvYVLru-4pQLFX7sx_QR6utGWWjVjH4jOg/exec',
  
  // Path B: Use backend API route instead of direct to Apps Script
  USE_BACKEND_API: import.meta.env.VITE_USE_BACKEND_API === 'true',
  
  // Lead Magnet URL
  LEAD_MAGNET_URL: import.meta.env.VITE_LEAD_MAGNET_URL || '/ga4-audit-checklist-placeholder.pdf',
};

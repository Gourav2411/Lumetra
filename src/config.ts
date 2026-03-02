export const config = {
  // Path A: Google Apps Script Web App URL
  GOOGLE_SHEETS_WEBAPP_URL: import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL || '',
  
  // Path B: Use backend API route instead of direct to Apps Script
  USE_BACKEND_API: import.meta.env.VITE_USE_BACKEND_API === 'true',
  
  // Lead Magnet URL
  LEAD_MAGNET_URL: import.meta.env.VITE_LEAD_MAGNET_URL || '/ga4-audit-checklist-placeholder.pdf',
};

# Google Sheets Lead Capture Integration

This document explains how to set up a Google Apps Script to receive lead form submissions directly into a Google Sheet.

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like "Lead Generation Submissions".
3. Set up the following headers in Row 1 (A through L):
   - Timestamp
   - Full Name
   - Email
   - Company
   - Website
   - Monthly Ad Spend Tier
   - Business Type
   - Primary Goal(s)
   - Notes
   - Source Page
   - Full URL
   - User Agent

## Step 2: Add the Apps Script
1. In your Google Sheet, click **Extensions > Apps Script**.
2. Delete any code in the script editor and paste the following code:

\`\`\`javascript
const SHEET_NAME = "Sheet1"; // Change this if your sheet tab is named differently

function doPost(e) {
  try {
    // Parse the incoming JSON payload
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);
    
    // Prepare the row data matching our schema
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.fullName || "",
      data.email || "",
      data.company || "",
      data.website || "",
      data.adSpendTier || "",
      data.businessType || "",
      data.primaryGoals || "",
      data.notes || "",
      data.sourcePage || "",
      data.fullUrl || "",
      data.userAgent || ""
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return a success response
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return an error response if something goes wrong
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle GET requests to verify the endpoint is active
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ "status": "active", "message": "Lead capture endpoint is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}
\`\`\`

3. Click the **Save** icon (or press Ctrl+S / Cmd+S).

## Step 3: Deploy as a Web App
1. Click the blue **Deploy** button in the top right corner and select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: "Lead Capture v1" (or whatever you prefer)
   - **Execute as**: "Me" (your email)
   - **Who has access**: "Anyone" (This is required so the form can submit without users logging into Google)
4. Click **Deploy**.
5. You will be prompted to authorize access. Click **Authorize access**, select your Google account, click **Advanced**, and then **Go to Untitled project (unsafe)**. Finally, click **Allow**.
6. Copy the **Web app URL** provided in the final deployment screen.

## Step 4: Configure the Website
1. In your project, create or open the `.env` file (or set it in your hosting environment).
2. Add the copied Web app URL to the environment variables:

\`\`\`env
VITE_GOOGLE_SHEETS_WEBAPP_URL="YOUR_WEB_APP_URL_HERE"
\`\`\`

3. (Optional) If you want to use the backend proxy instead of sending directly from the browser, set:
\`\`\`env
VITE_USE_BACKEND_API="true"
\`\`\`

That's it! Your form submissions will now automatically populate your Google Sheet.

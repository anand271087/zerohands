# Calculator leads → Google Sheet (5-minute setup)

Every time a visitor enters their email in the savings calculator, a row is added to your Google Sheet. Until this is set up, leads are still saved in Netlify (Netlify dashboard → your site → **Forms** → `calculator-lead`).

## 1. Create the sheet

1. Go to <https://sheets.new> (signed in as the account that should own the leads).
2. Name it **ZeroHands – Calculator Leads**.
3. In row 1, add these headers (A1 → H1):

   `Date | Email | People | Time % | Monthly salary (₹) | Yearly cost (₹) | Yearly saving (₹) | Page`

## 2. Add the script

1. In the sheet: **Extensions → Apps Script**.
2. Delete everything in `Code.gs` and paste:

```javascript
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([
    new Date(),
    d.email,
    Number(d.people),
    Number(d.timeShare),
    Number(d.monthlySalary),
    Number(d.currentYearly),
    Number(d.savedYearly),
    d.page
  ]);
  return ContentService.createTextOutput('ok');
}
```

3. Click **Save** (disk icon).

## 3. Publish it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear next to "Select type" → **Web app**.
3. Set:
   - Description: `Calculator leads`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, then **Authorize access** and allow it with your Google account
   (if you see "Google hasn't verified this app": **Advanced → Go to … (unsafe)** — it's your own script).
5. Copy the **Web app URL** (starts with `https://script.google.com/macros/s/…/exec`).

## 4. Connect the website

Send the Web app URL to Claude (or paste it into `src/config.js` as `LEADS_SHEET_URL`), then rebuild and deploy.

## 5. Share access

In the sheet, click **Share** and add your sales person's email as **Viewer** or **Editor**.

> "Anyone" access only lets people *add* rows through the script — nobody can read the sheet unless you share it.

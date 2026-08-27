function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "timestamp", "pageIndustry", "formName", "firstName", "lastName",
        "email", "company", "role", "volume", "message"
      ]);
    }

    sheet.appendRow([
      data.timestamp || "",
      data.pageIndustry || "",
      data.formName || "",
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.company || "",
      data.role || "",
      data.volume || "",
      data.message || "",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

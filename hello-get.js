function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'content': 'post ok'
  })).setMimeType(ContentService.MimeType.JSON)
}

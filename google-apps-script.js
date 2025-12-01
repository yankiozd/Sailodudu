// Google Apps Script - Google Sheets'e veri kaydetmek için
// Bu kodu Google Sheets > Extensions > Apps Script içine yapıştırın

function doPost(e) {
  try {
    // Aktif sheet'i al
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Form verilerini parse et
    const data = JSON.parse(e.postData.contents);
    
    // Yeni satır ekle
    sheet.appendRow([
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })
    ]);
    
    // Başarılı yanıt döndür
    return ContentService.createTextOutput(JSON.stringify({
      'success': true,
      'message': 'Veri başarıyla kaydedildi'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Hata durumunda
    return ContentService.createTextOutput(JSON.stringify({
      'success': false,
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

const reservation =  {
  sheet: SpreadsheetApp.getActive().getSheetByName('reservation'),
  createReservation: function(userId, datetime) {
    return {
      status: 201,
      sheet: this.sheet.appendRow([userId, datetime.getTime()])
    };
  }
}
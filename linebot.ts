var CHANNEL_ACCESS_TOKEN = 'TOKEN';
var LINE_ENDPOINT = 'https://api.line.me/v2/bot/message/reply';

function doPost(e) {
  const contents = e.postData.contents
  const json = JSON.parse(contents);
  const user_id = json.events[0].source.userId;
  const user_message = json.events[0].source.message;
  const reply_token = json.events[0].replyToken;
  if (user_message.match('/^予約作成$/')) {
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    reservation.createReservation(userId, nextWeek);
    const message = `${nextWeek.toString()}で予約しました`
    UrlFetchApp.fetch
  }

}
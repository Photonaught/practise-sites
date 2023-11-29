var moment = require

function showDate() {
  let sDate = new Date();
  let displayDate = moment(sDate).format('LL');

  document.getElementByID('date').innerHTML = displayDate;

}

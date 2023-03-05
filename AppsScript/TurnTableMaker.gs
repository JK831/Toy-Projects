function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  const notAvailableDays = new Map();
  const participantsByWeekDay = new Map();

  var range = sheet.getRange("B2");
  var monValue = range.getValue().toString();
  var mondayParticipants = monValue.split(",");
  participantsByWeekDay[1] = mondayParticipants;

  var row = 2;
  var col = 11; // I
  var currentCell = sheet.getRange(row, col);
  var currentName = currentCell.getValue();
  var numOfPeopleHaveNotAvailableDays = 0;
  while (currentName != "")
  {
    var dateString = sheet.getRange(row, col + 1).getValue().toString();
    var dateArray = dateString.split(",");
    notAvailableDays[currentName] = dateArray;
    currentCell = sheet.getRange(++row, col);
    currentName = currentCell.getValue();
  }
  
  var startDate = sheet.getRange("I2").getValue();
  var startDay = Utilities.formatDate(startDate, 'UTC', 'dd');
  var startWeekDay = 1; // Monday == 1
  var period = 5; // 5 days in a week
  var startIn = startDate.getDay(); // Weekday of startDate
  var currentDay = startWeekDay + startIn;
  var calendarStartRow = 13;
  var calendarStartCol = 2 + startWeekDay; // B + start day

  // TODO
  // 참여자 모두에게 우선순위 부여 (초기 값 = 1). 우선순위가 높은 사람부터 배정될 수 있도록 한다.
  // TurnTable에 들어가는 사람은 해당 요일에 배정될 수 있는 사람 중 우선순위가 가장 높은 사람. 누군가 배정됐을 시 해당 사람의 우선순위를 낮춘다.

  range = sheet.getRange("B13");
  for (var i = 0; i < notAvailableDays[name].length; i++)
  {

  }

  
}

console.log("JS loaded");

var timeNowEl = document.getElementById("currentDay")

var calendarDate = dayjs().format('dddd DD MMMM');

timeNowEl.textContent = calendarDate;


// timeNowEl.textcontent = 

console.log(calendarDate);
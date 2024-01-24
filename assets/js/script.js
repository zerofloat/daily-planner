console.log("JS loaded");

dayjs.extend(window.dayjs_plugin_advancedFormat);

var timeNowEl = document.getElementById("currentDay")

var calendarDate = dayjs().format('Do MMMM YYYY');

timeNowEl.textContent = calendarDate;

console.log(calendarDate);
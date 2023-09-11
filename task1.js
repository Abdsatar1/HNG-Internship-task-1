// code to display the current day
const currentWeekDay = document.getElementById('currentDay');
currentWeekDay.textContent = 'Today is: ' + new Date().toLocaleString('en-US', { weekday: 'long'});

// function to display the current time
function time() {
	var currentTime = new Date();
	var hours = currentTime.getHours() - 1;
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var displayTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" +
	(seconds < 10 ? "0" : "") + seconds;
	document.getElementById('currentTime').innerHTML = displayTime + " UTC";
}
time()
setInterval(time, 1000);

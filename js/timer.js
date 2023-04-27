var timeLeft = 600;
var timer = document.getElementById("timer");

var interval = setInterval(function () {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft - minutes * 60;

  timer.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  if (--timeLeft < 0) {
    clearInterval(interval);
    timer.innerHTML = "Час вийшов!";
  }
}, 1000);

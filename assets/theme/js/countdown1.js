// Set the date and time for the countdown (adjust this according to your needs)
var countdownDate = new Date("September 30, 2023 18:00:00").getTime();

// Update the countdown every second
var countdown = setInterval(function() {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var timeRemaining = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the "countdown" element
  //document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("countdownD").innerHTML = days;
  document.getElementById("countdownH").innerHTML = hours;
  document.getElementById("countdownM").innerHTML = minutes;
  document.getElementById("countdownS").innerHTML = seconds;

  // If the countdown is finished, display a message
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Countdown has ended!";
  }
}, 1000);
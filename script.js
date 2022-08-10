"use strict";

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function clock() {
  const curTime = new Date();

  const hours = curTime.getHours();
  const minutes = curTime.getMinutes();
  const seconds = curTime.getSeconds();

  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  const ampmEl = document.getElementById("ampm");

  let ampm;

  if (hours < 12) {
    ampm = "am";
  } else {
    ampm = "pm";
  }

  ampmEl.innerHTML = ampm;
}

clock();

setInterval(clock, 1000);

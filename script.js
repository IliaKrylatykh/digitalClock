"use strict";

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
var headerEl = document.getElementById("header");
var ampmEl = document.getElementById("ampm");
var hoursLang = document.getElementById("hoursLang");
var minutesLang = document.getElementById("minutesLang");
var secondsLang = document.getElementById("secondsLang");

function clock() {
  const curTime = new Date();

  let hours = curTime.getHours();
  let minutes = curTime.getMinutes();
  let seconds = curTime.getSeconds();

  let ampm;

  let hoursRu;
  let minutesRu;
  let secondsRu;

  var lang = navigator.language;
  console.log(lang);

  if (lang === "ru-RU") {
    headerEl.innerHTML = "Электронные часы";
    ampm = "";
    hoursRu = "ч";
    minutesRu = "м";
    secondsRu = "с";
  } else if (hours < 12) {
    ampm = "am";
  } else {
    hours = hours - 12;
    ampm = "pm";
  }

  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  ampmEl.innerHTML = ampm;
  hoursLang.innerHTML = hoursRu;
  minutesLang.innerHTML = minutesRu;
  secondsLang.innerHTML = secondsRu;
}

clock();

setInterval(clock, 1000);

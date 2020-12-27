const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let year = 2021;
let month = 1;
let day = 7;
let hour = 12;
let min = 0;
let sec = 0;


let last_time = 0;

function calculateTime(currentTime) {
  let date_time = new Date();

  let curr_day = date_time.getDate();
  let curr_month = date_time.getMonth() + 1;
  let curr_year = date_time.getFullYear();

  let curr_hour = date_time.getHours();
  let curr_min = date_time.getMinutes();
  let curr_sec = date_time.getSeconds();

  let rem_year = year - curr_year;
  let rem_month = rem_year * 12 + month - curr_month;
  let rem_days = rem_month * 30 + day - curr_day;


  let rem_hour = hour - curr_hour;
  if (rem_hour < 0) {
    rem_hour = rem_hour + 24;
    rem_days = rem_days - 1;
  }
  rem_hour = rem_hour - 1;
  let rem_min = 60 + min - curr_min - 1;
  let rem_sec = 60 + sec - curr_sec;


  window.requestAnimationFrame(calculateTime);

  let rendertime = currentTime - last_time;
  if (rendertime < 1000) return;
  last_time = currentTime;

  if (rem_sec < 10) {
    seconds.innerHTML = "0" + rem_sec;
  }else {
    seconds.innerHTML = rem_sec;
  }

  if (rem_min < 10) {
    minutes.innerHTML = "0" + rem_min;
  }else {
    minutes.innerHTML = rem_min;
  }

  if (rem_hour < 10) {
    hours.innerHTML = "0" + rem_hour;
  }else {
    hours.innerHTML = rem_hour;
  }

  if (rem_days < 10) {
    days.innerHTML = "0" + rem_days;
  }else {
    days.innerHTML = rem_days;
  }

}


window.requestAnimationFrame(calculateTime);

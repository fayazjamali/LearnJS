let day_name = document.getElementById("day_name");
let day_num = document.getElementById("day_num");
let month_name = document.getElementById("month_name");
let year_num = document.getElementById("year_num");


//TIME        /////////////
let hours = document.getElementById("hours");
let min = document.getElementById("min");
let format = document.getElementById("format");

let fullTime = new time


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const newDate = new Date();
const month = newDate.getMonth();
const date = newDate.getDate();
const day = newDate.getDay()
const year = newDate.getFullYear();

day_num.textContent = date;
day_name.textContent = days[day];
month_name.textContent = allMonths[month]
year_num.textContent = month;

const newTime = new Date();
let hour = newTime.getHours();
let minutes = newDate.getMinutes();


hours.textContent = hour;
let day_name = document.getElementById("day_name");
let day_num = document.getElementById("day_num");
let month_name = document.getElementById("month_name");
let year_num = document.getElementById("year_num");
let timeDot = document.getElementById('dot');
let mainCard = document.getElementById("card");

let hours = document.getElementById("hours");
let min = document.getElementById("min");
let format = document.getElementById("format");
let footer = document.getElementById("footer");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let newDate = new Date();
let month = newDate.getMonth();
let date = newDate.getDate();
let day = newDate.getDay();
let year = newDate.getFullYear();
let gethours = newDate.getHours();
let getMin = newDate.getMinutes();

let formatedHours = gethours % 12 || 12;
let period = gethours >= 12 ? "PM" : "AM";
format.textContent = period;

day_name.textContent = days[day];
day_num.textContent = date;
month_name.textContent = months[month];
year_num.textContent = year;
hours.textContent = String(formatedHours).padStart(2, '0');
min.textContent = String(getMin).padStart(2, '0');





let blinkMe = 0;

function toggleBlink() {
    blinkMe = blinkMe === 0 ? 1 : 0; // Toggle between 0 and 1

    switch (blinkMe) {
        case 0:
            timeDot.style.visibility = "visible";
            mainCard.style.transform = "scale(1)";
            footer.style.background = "red";
            footer.style.color = "white";
            break;
        case 1:
            timeDot.style.visibility = "hidden";
            mainCard.style.transform = "scale(1.02)";
            footer.style.background = "white";
            footer.style.color = "red";


    }

}


setInterval(toggleBlink, 1000);


/*
console.log(`Hello World`)
console.log(`I like Pizza`)
window.alert(`This is pizza and I love it`)
/*


//This is a Comment but a single line Comment //

/* This is
    a multiple lines
        Comment */

// const inputBtn = document.getElementById("inputBtn");


// function addText() {
//     const inputText = document.getElementById("input").value;
//     document.getElementById("myH1").textContent = inputText;
// }

// inputBtn.addEventListener('click', addText)


// document.getElementById("myH1").textContent = 'This is World';
// document.getElementById("myP").textContent = 'This is paragraph';




//2     Variables           =============================================================================================================== 2

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;
// let firstName = "Rehan";
// let online = true;


// // console.log(typeof firstName)
// console.log(`Your content is ready to help ${firstName}`)
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price} `)
// console.log(`Your GPA is: ${gpa}`)
// console.log(`${firstName} is ${age} years old and he is Online right now`)

// let fullName = "Rehan Jamali";
// let age = 20;
// let student = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old.`;
// document.getElementById("p3").textContent = `Student: ${student}`;



//3     Arthmetic Opearters  = Opperands  (values, variables, etc)                          ============================================================================================= 4
//                                 operators = (+ / * -)
//                                  ex 11 = 5 + 6;



// let submitBtn = document.getElementById("submit");


// function addNum() {

//     let students = document.getElementById("inputNumber").value;
//     students = parseInt(students)

//     students = students + 10;
//     students = students - 28;
//     students = students * 3;
//     students = students / 3;

//     students = students ** 2  //Exponent Operator
//     ExtraStudents = students % 2 //Moduler and Remender is 0


//     document.getElementById("p1").textContent = students;
//     document.getElementById("p2").textContent = ExtraStudents;
//     document.getElementById("p3").textContent = ExtraStudents;

// }

// submitBtn.addEventListener("click", addNum)
// let add = document.getElementById("add");
// let remove = document.getElementById("remove");

// students = 12;
// students += 2;
// students -= 7;
// students *= 2;



// document.getElementById("p1").textContent = students ** 2;
// document.getElementById("p2").textContent = students % 2;
// document.getElementById("p3").textContent = students;


//4 How to accept User Input                    ===================================================================================================================== 4

//1. Easy Way = Window Prompt
//2. Professional Way = HTML TextBox

// let username;
// let submitBtn = document.getElementById("submit").onclick = function () {
//     username = document.getElementById("username").value;
//     document.getElementById("p1").textContent = username;
//     document.getElementById("heading").textContent = `Welcome ${username}!`
// };

// username = window.prompt("What's your user name?");
// username.value;


//5     Type Conversation   = = Change the data type of a value to another  =================================================================================== 5
//                              ("String", "Numbers", "Booleans")

// let ageSubmit = document.getElementById("submit").onclick = function () {
//     age = document.getElementById("username").value;
//     age = Number(age);                                      // Changed String to Number
//     document.getElementById("p1").textContent = age;
//     document.getElementById("p2").textContent = typeof age;
//     document.getElementById("heading").textContent = `You are ${age} years old!`;
// };


// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = String(x);
// y = Number(y);
// z = Boolean(z)

// document.getElementById("p1").textContent = x, typeof x;
// document.getElementById("p2").textContent = y, typeof y;
// document.getElementById("p3").textContent = z, typeof z;

// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)


//6      Constants    /     A variable that cant be changed     ============================================================================================== 6


// document.getElementById("us_lable").textContent = 'What is the Radius of Circle? '
// document.getElementById("username").addEventListener("input", () => {
//     let pi = 3.14159;
//     let = radius = document.getElementById("username").value;
//     let = circumference = 2 * pi * radius;;

//     document.getElementById("p1").textContent = `Circumference is: ${circumference}`;
//     document.getElementById("p2").textContent = `Radius is ${radius}`;

// })


// Math  = built-in object that provides a
//         collection of Properties and Methods

// let PI;
// PI = Math.PI;
// e = Math.E;

// let x = -3.21;
// let y = 2;
// let z = 5;


// z = Math.round(x);      // When after decimal the number is greater then 5, before decimal number will be change
// z = Math.floor(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);     // 3 with power of 2
// z = Math.sqrt(x);            // For Squire Root of x
// z = Math.log(x);        // The natural Logirthim of x
// z = Math.sin(x);
//z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x)
// let max = Math.max(x, y, z)      //It will show the Max Num from List
//let min = Math.min(x, y, z);            //It will show min nUm from List

// document.getElementById("p1").textContent = z;




// Random Number Generator =================================                    ======================================================================================

// let randomNum = Math.floor(Math.random() * 10 + 1);

// const max = 100;
// const min = 50;

// let randomNum = Math.floor(Math.random() * (max - min) + min);   //Now it will Generate number from 50 to 100;

// document.getElementById("p1").textContent = randomNum;


//if Statement ==== if condition meet Run the code, if not do something else.




//=====================================================This If function works on Random Refresh
// let p1 = document.getElementById("p1");
// let p2 = document.getElementById("p2");
// let p3 = document.getElementById("p3");
// let maxAge = 50;
// let minAge = 15;
// let randomPerson = Math.floor(Math.random() * maxAge) + minAge;
// p2.textContent = randomPerson;
// if (randomPerson >= 25) {
//     p1.textContent = `Yes He is ${randomPerson} years old!`;
//     p1.style.backgroundColor = "white";
//     p1.style.color = "green";
//     p1.style.border = "3px solid green"
// } else {
//     p1.textContent = `Yes He is not, He is just ${randomPerson} years old`;
//     p1.style.backgroundColor = "white";
//     p1.style.color = "red";
//     p1.style.border = "3px solid red"
// }


//=====================================================if working working with Input

// let p1 = document.getElementById("p1");
// let p2 = document.getElementById("p2");
// let p3 = document.getElementById("p3");
// let ageInput = document.getElementById("inputNumber");

// ageInput.addEventListener("input", () => {
//     let ageInputValue = ageInput.value;
//     let age = Number(ageInputValue);

//     if (age >= 25) {
//         p1.textContent = `Yes He is ${age} years old!`;
//         p1.style.backgroundColor = "white";
//         p1.style.color = "green";
//         p1.style.border = "3px solid green"
//     } else {
//         p1.textContent = `Yes He is not, He is just ${age} years old`;
//         p1.style.backgroundColor = "white";
//         p1.style.color = "red";
//         p1.style.border = "3px solid red"
//     }
// })







///// Styles =========================== Styles ==============
function DangerStyle(item) {
    item.style.backgroundColor = "white";
    item.style.color = "red";
    item.style.border = "2px solid red";
}

function halfStyle(item) {
    item.style.backgroundColor = "white";
    item.style.color = "green";
    item.style.border = "2px solid green";
}

function success(item) {
    item.style.backgroundColor = "green";
    item.style.color = "white";
    item.style.border = "none";
}

///// Styles =========================== Styles ==============


// let heading = document.getElementById("heading");
// heading.textContent = "Let's see if you can Drive or Not!"
// function naturalStyle(item) {
//     item.style.backgroundColor = "#c2c0c0";
//     item.textContent = "Nill";
//     item.style.color = "black";
//     item.style.border = "solid 1px black";
// }

// naturalStyle(p1);
// naturalStyle(p2);
// naturalStyle(p3);

// submitBtn.addEventListener("click", function () {

//     let licenseInputValue = licenseInput.value;
//     let license = licenseInputValue.toLowerCase(); 54
//     let ageInputValue = ageInput.value;
//     let age = Number(ageInputValue);

//     if (age > 100) {
//         DangerStyle(p1);
//         DangerStyle(p2);
//         DangerStyle(p3);
//         p1.textContent = `${age} years old?  I think you typed your age wrong.`;
//         p2.textContent = `Fix the issue to go further.`;
//         p3.textContent = `Fix Fix your age issue to see the Result.`;
//     } else if (age >= 18) {
//         success(p1)
//         DangerStyle(p2);
//         DangerStyle(p3);
//         p1.textContent = `Age: ${age} years old.`
//         if (license == "yes") {
//             success(p1);
//             success(p2);
//             success(p3);

//             p1.textContent = `Age: ${age} years old.`;
//             p2.textContent = `License: ${license}`;
//             p3.textContent = `You are ${age} years old and You have License. Enjoy Driving :)`
//         } else if (license == "no") {
//             p1.textContent = `Age: ${age} years old.`
//             p2.textContent = `License: ${license}`;
//             p3.textContent = `You are ${age} years old but you don't have Driving License. You can't Drive. Sorry!`
//         }
//         else {
//             p1.textContent = `Age: ${age} years old.`;
//             p2.textContent = `Error: Please Answer in "Yes" or "No".`;
//             p3.textContent = `Check out your form again and Fix the issues.`;
//         }

//     } else {
//         p1.textContent = "You are not yet 18 years old, its not safe for you. Sorry!";
//     }
// })



//=================================================================== Interval Loop Concept

// let counter = 1;
// let interval = setInterval(function () {
//     console.log(counter)

//     counter++
//     if (counter === 10 + 1) {
//         clearInterval(interval)
//     }
// }, 600);

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let heading = document.getElementById("heading");
let submitBtn = document.getElementById("submit");
let printBtn = document.getElementById("print");
let ageInput = document.getElementById("inputNumber1");
let licenseInput = document.getElementById("inputNumber2");


// let time = 19;
// if (time >= 9 && time <= 18) {
//     success(p1)
//     p1.textContent = "Time is more then 9";
// } else if (time >= 19) {
//     halfStyle(p1);
//     p1.textContent = "Its half style";
// } else {
//     DangerStyle(p1);
//     p1.textContent = `This is Danger Zone`;
// }


// let isStudent = false;
// if (isStudent) {
//     success(p1)
//     success(p2)
//     p1.textContent = isStudent;
//     p2.textContent = `You are a Student`;
// } else {
//     DangerStyle(p1)
//     DangerStyle(p2)
//     p1.textContent = isStudent;
//     p2.textContent = `You are not a student.`;
// }

let age = Number(ageInput);

// ageInput.addEventListener("input", () => {
//     ageValue = ageInput.value;
//     age = Number(ageValue)
//     if (age > 100) {
//         halfStyle(p1)
//         p1.textContent = `You are too old to enter this site.`
//     } else if (age > 18) {
//         success(p1)
//         p1.textContent = `You are allowed to enter in this site.`

//     } else if (age <= 0) {
//         DangerStyle(p1)
//         p1.textContent = `Age Can't be below or equal 0`;

//     } else if (age < 18) {
//         DangerStyle(p1)
//         p1.textContent = `Your are not 18+ to enter this site.`;
//     }
//     else {
//         DangerStyle(p1)
//         p1.textContent = `NO Entry`;
//     }
// })



// submitBtn.onclick = function () {
//     age = ageInput.value;
//     age = Number(age)
//     if (age > 100) {
//         halfStyle(p1)
//         p1.textContent = `You are too old to enter this site.`
//     } else if (age > 18) {
//         success(p1)
//         p1.textContent = `You are allowed to enter in this site.`

//     } else if (age <= 0) {
//         DangerStyle(p1)
//         p1.textContent = `Age Can't be below or equal 0`;

//     } else if (age < 18) {
//         DangerStyle(p1)
//         p1.textContent = `Your are not 18+ to enter this site.`;
//     }
//     else {
//         DangerStyle(p1)
//         p1.textContent = `NO Entry`;
//     }
// }



//// DAte------------------------
// let currentDate = new Date();
// let monthNum = currentDate.getMonth();
// let dayNum = currentDate.getDay();
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let thisMonth = months[monthNum]
// let thisDay = days[dayNum]
// let thisYear = currentDate.getFullYear()
// let thisDate = currentDate.getDate()



// p2.textContent = currentDate;
// p3.textContent = thisDay;
// heading.textContent = `${thisDate}/${monthNum}/${thisYear} ${thisDay},${thisMonth} `;




//11  Checked Property in JavaScript //////////////// The Check Property Determinaze the checked state
//                                                     of an HTML Checkbox or Radio button Element

// const checkbox = document.getElementById("checkbox");
// const visa = document.getElementById("visa");
// const mc = document.getElementById("mastercard");
// const paypal = document.getElementById("paypal");



// submitBtn.onclick = function () {
//     if (checkbox.checked) {
//         success(p1);
//         p1.textContent = `You are Subscribed. Thank you :)`;
//     } else {
//         halfStyle(p1)
//         p1.textContent = `You are not Subscribed yet. Please SubScribe now`;
//     }
//     if (visa.checked) {
//         success(p2);
//         p2.textContent = `You are Paying with Visa. `
//     } else if (mc.checked) {
//         success(p2);
//         p2.textContent = `You are paying with Mastercard`;
//     } else if (paypal.checked) {
//         success(p2)
//         p2.textContent = `You are paying with Master Card.`;
//     } else {
//         DangerStyle(p2);
//         p2.textContent = `You did not chose any Payment method.`
//     }

// }

// Ternary Operator  = a shortcut to if{} and else{} statements helps to assign a variable based
//                                          on a condition ??.  codeIfTrue : codeIfFalse;

// let yourAge = 19;
// let message = yourAge >= 18 ? `You are 18+ years old.` : `You are a minor.`;
// p1.textContent = message;

// let time = 16;
// let message = time < 12 ? `Good Morning Sir!` : `Good Evening Sir!`;
// p2.textContent = message;

// let isStudent = true;
// let message = isStudent ? `You are a Student` : `You are not a Student`;
// p2.textContent = message;

// let purchaseAmount = 123;
// let discount = Math.floor(purchaseAmount * 0.8,);
// let message = purchaseAmount > 100 ? `You got Discount and your new price is $${discount}` : `Your Total Amount: $${purchaseAmount}`;
// p2.textContent = message;


// Switch ==        A Switch can be afficient replacement of to many If ELSE statements.
const fullDateTime = new Date();
const getDay = fullDateTime.getDay()
p1.textContent = getDay;
const day = getDay;
switch (day) {
    case 1:
        p2.textContent = "Monday";
        break;

    case 2:
        p2.textContent = "Tuesday";
        break;

    case 3:
        p2.textContent = "Wednesday"
        break;

    case 4:
        p2.textContent = "Thursday";
        break;

    case 5:
        p2.textContent = "Friday";
        break;

    case 6:
        p2.textContent = "Saturday";
        break;
    case 7:
        p2.textContent = "Sunday";

}

const getMonth = fullDateTime.getMonth();



p1.textContent = `${getMonth}`

let newNum = 13;
switch (newNum) {
    case 1:
        p3.textContent = "January";
        break;
    case 2:
        p3.textContent = "February";
        break;
    case 3:
        p3.textContent = "March";
        break;
    case 4:
        p3.textContent = "April";
        break;
    case 5:
        p3.textContent = "May";
        break;
    case 6:
        p3.textContent = "June";
        break;
    case 7:
        p3.textContent = "July";
        break;
    case 8:
        p3.textContent = "August";
        break;
    case 9:
        p3.textContent = "September";
        break;
    case 10:
        p3.textContent = "October";
        break;
    case 11:
        p3.textContent = "November";
        break;
    case 12:
        p3.textContent = "December";
        break;
    default:
        DangerStyle(p3)
        p3.textContent = "You are wrong!";

}















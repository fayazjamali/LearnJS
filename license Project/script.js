///// Styles =========================== Styles ==============
function DangerStyle(item) {
    item.style.backgroundColor = "white";
    item.style.color = "red";
    item.style.border = "1px solid red";
}

function halfStyle(item) {
    item.style.backgroundColor = "white";
    item.style.color = "green";
    item.style.border = "1px solid green";
}

function success(item) {
    item.style.backgroundColor = "green";
    item.style.color = "white";
    item.style.border = "none";
}

///// Styles =========================== Styles ==============

let heading = document.getElementById("heading");
heading.textContent = "Let's see if you can Drive or Not!";
function naturalStyle(item) {
    item.style.backgroundColor = "#c2c0c0";
    item.textContent = "Nill";
    item.style.color = "black";
    item.style.border = "solid 1px black";
}


let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let warning = document.getElementById("warning");


let submitBtn = document.getElementById("submit");
let ageInput = document.getElementById("inputNumber1");
let licenseInput = document.getElementById("inputNumber2");
let licenseInputValue = licenseInput.value;
let license = licenseInputValue.toLowerCase();
let ageInputValue = ageInput.value;
let age = Number(ageInputValue);

naturalStyle(p1);
naturalStyle(p2);
naturalStyle(p3);
submitBtn.disabled = true;

function toggleButtonState() {

    let licenseInputValue = licenseInput.value.trim();
    let ageInputValue = ageInput.value.trim();

    if (ageInputValue !== "" && licenseInputValue !== "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

ageInput.addEventListener("input", toggleButtonState);
licenseInput.addEventListener("input", toggleButtonState);




submitBtn.addEventListener("click", function () {
    let licenseInputValue = licenseInput.value;
    let license = licenseInputValue.toLowerCase();
    let ageInputValue = ageInput.value;
    let age = Number(ageInputValue);

    ageInput.addEventListener("input", () => {
        if (age >= 99) {
            warning.textContent = `You can'type the age more then 100`
        }
    })
    if (age > 100) {
        DangerStyle(p1);
        DangerStyle(p2);
        DangerStyle(p3);
        p1.textContent = `${age} years old?  I think you typed your age wrong.`;
        heading.textContent = "Let's see if you can Drive or Not!";
        heading.style = "black";
        if (license === "yes") {
            success(p2);
            p2.textContent = `License: ${license}`;
        } else if (license == "no") {
            DangerStyle(p2);
            p2.textContent = `License: ${license}`;
        } else {
            DangerStyle(p2);
            p2.textContent = `You Type wrong, Please Reply in only "Yes" or "No".`;
        }
        p3.textContent = `Fix Fix your age issue to see the Result.`;
    } else if (age >= 18) {
        success(p1);
        DangerStyle(p2);
        DangerStyle(p3);
        p1.textContent = `Age: ${age} years old.`;
        if (license == "yes") {
            success(p1);
            success(p2);
            success(p3);

            p1.textContent = `Age: ${age} years old.`;
            p2.textContent = `License: ${license}`;
            p3.textContent = `You are ${age} years old and You have License. Enjoy Driving :)`;
            heading.style.color = "green";
            heading.textContent = `Congratulations! You are good to Go, Enjoy Driving :)`;
        } else if (license == "no") {
            p1.textContent = `Age: ${age} years old.`;
            p2.textContent = `License: ${license}`;
            p3.textContent = `You are ${age} years old but you don't have Driving License. You can't Drive. Sorry!`;
        } else {
            p1.textContent = `Age: ${age} years old.`;
            p2.textContent = `Error: Please Answer in "Yes" or "No".`;
            p3.textContent = `Check out your form again and Fix the issues.`;
        }
    } else {
        DangerStyle(p1);
        DangerStyle(p2);
        DangerStyle(p3);
        p1.textContent = `You are only ${age} years old. Its not safe for you to drive. Sorry`;
        if (license == "yes") {
            p2.textContent = `You are just ${age} years old, Driving license only issued to 18+.`;
        } else {
            p2.textContent = `License: ${license}`;
        }
    }
});
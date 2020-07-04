//grab all
const inputfield = document.querySelector("#input");
const select = document.querySelector("select");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const output = document.querySelector("#output");
const error1 = document.querySelector(".error");

let poundsvalue;
let gramsvalue;
let kilogramsvalue;
let ouncesvalue;

//diaplay none
error1.style.display = "none";  
output.style.opacity = "0";
//listen to change in select field and assign different functions
select.addEventListener("change", (e) => {
    if (e.target.value === "pounds") {
        pounds();
    }
    if (e.target.value === "grams") {
        grams();
    }
    if (e.target.value === "kilograms") {
        kilograms();
    }
    if (e.target.value === "ounces") {
        ounces();
    }
    if (e.target.value === "nothing") {
        putalert();
    }
})
//functions with calculation
function pounds() {

    if (inputfield.value.length === 0) {
        inputfield.addEventListener("input", () => {
            poundscalc();
            display("GRAMS", gramsvalue, "KILOGRAMS", kilogramsvalue, "OUNCES", ouncesvalue);
        })

    }
    else {
        poundscalc();
        display("GRAMS", gramsvalue, "KILOGRAMS", kilogramsvalue, "OUNCES", ouncesvalue);
        inputfield.addEventListener("input", () => {
            poundscalc();
            display("GRAMS", gramsvalue, "KILOGRAMS", kilogramsvalue, "OUNCES", ouncesvalue);
        })
    }

    clearvalues();
}
function grams() {

    if (inputfield.value.length === 0) {
        inputfield.addEventListener("input", () => {
            gramscalc();
            display("POUNDS", poundsvalue, "KILOGRAMS", kilogramsvalue, "OUNCES", ouncesvalue);
        })
        clearvalues();
    }
    else {
        gramscalc();
        display("POUNDS", poundsvalue, "KILOGRAMS", kilogramsvalue, "OUNCES", ouncesvalue);
        inputfield.addEventListener("input", () => {
            gramscalc();
            display("POUNDS", poundsvalue, "KILOGRAMS", kilogramsvalue, "OUNCES", ouncesvalue);
        })
        clearvalues();

    }
}
function kilograms() {
    if (inputfield.value.length === 0) {
        inputfield.addEventListener("input", () => {
            kilogramscalc();
            display("POUNDS", poundsvalue, "GRAMS", gramsvalue, "OUNCES", ouncesvalue);
        })
        clearvalues();
    }
    else {
        kilogramscalc();
        display("POUNDS", poundsvalue, "GRAMS", gramsvalue, "OUNCES", ouncesvalue);
        inputfield.addEventListener("input", () => {
            kilogramscalc();
            display("POUNDS", poundsvalue, "GRAMS", gramsvalue, "OUNCES", ouncesvalue);
        })
        clearvalues();
    }
}

function ounces() {
    if (inputfield.value.length === 0) {
        inputfield.addEventListener("input", () => {
            ouncescalc();
            display("POUNDS", poundsvalue, "GRAMS", gramsvalue, "KILOGRAMS", kilogramsvalue);
        })
        clearvalues();
    }
    else {
        ouncescalc();
        display("POUNDS", poundsvalue, "GRAMS", gramsvalue, "KILOGRAMS", kilogramsvalue);
        inputfield.addEventListener("input", () => {
            ouncescalc();
            display("POUNDS", poundsvalue, "GRAMS", gramsvalue, "KILOGRAMS", kilogramsvalue);
        })
        clearvalues();

    }
}
function putalert(){
    output.style.opacity = "0";
}

//calculation part

function poundscalc() {
    poundsvalue = inputfield.value;
    gramsvalue = poundsvalue * 453.59237;
    kilogramsvalue = poundsvalue * 0.45359237;
    ouncesvalue = poundsvalue * 16;
}
function gramscalc() {
    gramsvalue = inputfield.value;
    poundsvalue = gramsvalue / 453.59237;
    kilogramsvalue = gramsvalue / 1000;
    ouncesvalue = gramsvalue * 0.03527396195;
    console.log({ ouncesvalue });
}
function kilogramscalc() {
    kilogramsvalue = inputfield.value;
    poundsvalue = kilogramsvalue / 0.45359237;
    gramsvalue = kilogramsvalue * 1000;
    ouncesvalue = kilogramsvalue / 0.02834952;
}
function ouncescalc() {
    ouncesvalue = inputfield.value;
    poundsvalue = ouncesvalue * 0.0625;
    kilogramsvalue = ouncesvalue * 0.02834952;
    gramsvalue = ouncesvalue * 28.34952;
}

//display function

function display(name1, value1, name2, value2, name3, value3) {

    if( isNaN(value1) || isNaN(value2) || isNaN(value3) ){
        output.style.opacity = "0";
     error1.textContent = "Please enter valid inputs";
     error1.style.display = "block";  
     return;
    }
    error1.style.display = "none";  
    output.style.opacity = "1";
    output1.firstElementChild.textContent = name1;
    output1.children[1].textContent = value1.toFixed(2);
    output2.firstElementChild.textContent = name2;
    output2.children[1].textContent = value2.toFixed(2);
    output3.firstElementChild.textContent = name3;
    output3.children[1].textContent = value3.toFixed(2);

}




//use clear
function clearvalues() {
    poundsvalue = 0;
    ouncesvalue = 0;
    kilogramsvalue = 0;
    gramsvalue = 0;
}
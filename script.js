function add (value) {
    display.value += value;
    display.scrollLeft = display.scrollWidth;
}

function calculate() {
    try{
        display.value = eval(display.value);
    } catch {
        display.value = Error;
    }
}
function clearDisplay() {
    display.value = "";
}
const display = document.getElementById("display");

function numDelete() {
    display.value = display.value.slice(0, -1);
}


// 0 add how 

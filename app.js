var message = document.getElementById("message");

// message.onclick = function (){
//     if (message.className == show){

//     } else {

//     }
// }

function showMessage() {
    message.className = "show";
}
// showMessage();

setTimeout(showMessage, 3000); //function showMessage fires after 3 seconds
//setTimeout calls a function once
//setInterval calls a function repeatedly after certain intervals



var colorChanger = document.getElementById("color-changer");
var colors = ["red", "blue", "green", "pink"];
var counter = 0; //counts which position we are in in the array

function changeColour() {

    if (counter >= colors.length) {
        counter = 0; //starts counter again at 0 if past 3
    }
    colorChanger.style.background = colors[counter];
    counter++;
}

var myTimer = setInterval(changeColour, 3000);

colorChanger.onclick = function () {
    clearInterval(myTimer); //stops the interval
    colorChanger.innerHTML = "Timer stopped";
}
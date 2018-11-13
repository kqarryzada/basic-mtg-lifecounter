var lifeCount;
var incrButton;
var decrButton;
init();

function init() {
    lifeCount  = 40;
    incrButton = document.getElementById("incr");
    decrButton  = document.getElementById("decr");
    document.getElementById("currLife").innerHTML = lifeCount; 
}

function increment() {
    if (lifeCount < 99)
        lifeCount++;

    updateScreen();
}

function decrement() {
    if (lifeCount > 0) {
        lifeCount--;
        updateScreen();
    } 

    // If, after the update, it's equal to 0
    if (lifeCount == 0) {
        window.open("0.gif","_self");
    }
}

function updateScreen() {
    document.getElementById("currLife").innerHTML = lifeCount;
}
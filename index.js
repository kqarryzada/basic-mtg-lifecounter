// var mainText     = document.getElementById("mainText");
var lifeCount  = 40;
var incrButton = document.getElementById("incr");
var decButton  = document.getElementById("dec");

function updateScreen() {
    document.getElementById("currLife").innerHTML = lifeCount;
}

function increment() {
    // window.alert("Working");
    if(lifeCount < 100)
        lifeCount++;
    updateScreen();
}

function decrement() {
    // window.alert("Also working");
    if(lifeCount > 0)
        lifeCount--;
    else
        window.alert("You dead, son");
    updateScreen();
}
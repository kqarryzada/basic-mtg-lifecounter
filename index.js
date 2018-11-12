var lifeCount;
var incrButton;
var decButton
init();

function init() {
    lifeCount  = 40;
    incrButton = document.getElementById("incr");
    decButton  = document.getElementById("dec");
    document.getElementById("currLife").innerHTML = lifeCount; 
}

function increment() {
    if(lifeCount < 100)
        lifeCount++;
    updateScreen();
}

function decrement() {
    if(lifeCount > 0)
        lifeCount--;
    else
        window.alert("You dead, son");
    updateScreen();
}

function updateScreen() {
    document.getElementById("currLife").innerHTML = lifeCount;
}
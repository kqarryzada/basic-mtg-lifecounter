var lifeCount;
var incrButton;
var decrButton
init();

function init() {
    lifeCount  = 40;
    incrButton = document.getElementById("incr");
    decrButton  = document.getElementById("decr");
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
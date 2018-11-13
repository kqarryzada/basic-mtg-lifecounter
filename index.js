var lifeCount;
var incrButton;
var decrButton;
var loseImg;
init();

function init() {
    lifeCount  = 40;
    incrButton = document.getElementById("incr");
    decrButton  = document.getElementById("decr");
    document.getElementById("currLife").innerHTML = lifeCount; 
    loseImg = document.getElementById("lose");
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
    } else {
        // showImage()
    }
}

function updateScreen() {
    document.getElementById("currLife").innerHTML = lifeCount;
}

function hideImage() {
    loseImg.style.visibility = "hidden";
}
function showImage() {
    loseImg.style.visibility = "visible";
}
const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");
const guess = document.getElementById("guessclr");
const guessrgb = document.getElementById("guessrgb");
const rand = document.getElementById("randomclr");
const winner = document.getElementById("winner");

function setRange(e) {
    let red = redRange.value;
    let green = greenRange.value;
    let blue = blueRange.value;
    guess.style.setProperty("--red", red);
    guess.style.setProperty("--green", green);
    guess.style.setProperty("--blue", blue);
    guessrgb.innerHTML = `r=${red} g=${green} b=${blue}`;
}

function resetRange() {
    redRange.value = 128;
    greenRange.value = 128;
    blueRange.value = 128;
    winner.style.opacity = 0;
    setRange();
}

function checkRange() {
    var rr = rand.style.getPropertyValue("--red");
    var rg = rand.style.getPropertyValue("--green");
    var rb = rand.style.getPropertyValue("--blue");
    var gr = guess.style.getPropertyValue("--red");
    var gg = guess.style.getPropertyValue("--green");
    var gb = guess.style.getPropertyValue("--blue");
    if (rr == gr && rg == gg && rb == gb ) {
        winner.style.opacity = 1;
    }
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newRandomColor() {
    red = randomNumber(5, 250);
    green = randomNumber(5, 250);
    blue = randomNumber(5, 250);
    rand.style.setProperty("--red", red);
    rand.style.setProperty("--green", green);
    rand.style.setProperty("--blue", blue);
    randomrgb.innerHTML = `r=${red} g=${green} b=${blue}`;

    resetRange();
}

newRandomColor();

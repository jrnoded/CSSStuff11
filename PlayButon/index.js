const pops = document.getElementsByClassName("lolli");
const headline = document.getElementById("headline")
const playButton = document.getElementById("play-button");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeHues() {
    let hue = randomNumber(0, 359);
    headline.style.setProperty("--hue", hue + "deg")
    for (let pop of pops) {
        hue = randomNumber(0, 359);
        pop.style.setProperty("--hue", hue + "deg");
    }
    
}

playButton.addEventListener("click", playButtonClicked);
var clicked = false;
var runInterval;

function playButtonClicked() {
    if (clicked === false) {
        runInterval = setInterval(changeHues, 2000);
        clicked = true;
        playButton.innerHTML = "&#9208;";
    } else {
        clearInterval(runInterval);
        clicked = false;
        playButton.innerHTML = "&#9658;";
    }
}

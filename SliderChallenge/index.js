const showrange = document.getElementById("showrange");
const valuerange = document.getElementById("valuerange");
const rank = document.getElementById("rank");

function sliderChange(value) {
    valuerange.innerHTML = value;
	rank.innerHTML = value;
    showrange.style.transform = `rotate(${value}deg)`;
}

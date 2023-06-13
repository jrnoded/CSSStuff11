const showrange = document.getElementById("showrange");
const valuerange = document.getElementById("valuerange")

function sliderChange(value) {
    valuerange.innerHTML = value;
    showrange.style.transform = `rotate(${value}deg)`
}

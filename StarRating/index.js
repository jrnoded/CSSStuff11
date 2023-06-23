
const cont = document.getElementById("container");
const score = document.getElementById("score")

function setStars(e) {
    
    let pc = `${e * 20}%`;
    console.log(pc);
    cont.style.setProperty('--pc',pc);
    score.innerHTML = pc;
}

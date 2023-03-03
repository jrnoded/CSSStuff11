const blob = document.getElementById("blob");
const where = document.getElementById("where");

setInterval(moveBlob, 2000);

function moveBlob() {
  var top = `${Math.floor(Math.random() * 90 + 1)}%`;
  var left = `${Math.floor(Math.random() * 90 + 1)}%`;
  var rot = `rotate(${Math.floor(Math.random() * 360)}deg)`;
  blob.style.top = `${top}`;
  blob.style.left = `${left}`;
  blob.style.transform = `${rot}`;
  where.innerText = `top: ${top} left: ${left} ${rot} `
}

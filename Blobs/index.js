const blob = document.getElementById("blob");

setInterval(moveBlob, 2000);

function moveBlob() {
    blob.style.top = Math.floor(Math.random()*90+1)+ '%';
    blob.style.left = Math.floor(Math.random()*90+1)+'%';
    blob.style.transform = "rotate(" + Math.floor(Math.random()*350 ) + "deg)"
}

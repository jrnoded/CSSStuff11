function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const runButton = document.getElementById("run");
const clrButton = document.getElementById("clear");
const columns = document.getElementById("container").children;

runButton.addEventListener("click", () => {
  let nthChild = randomNumber(0, 11);
  let red = randomNumber(0, 254);
  let green = randomNumber(0, 254);
  let blue = randomNumber(0, 254);
  let average = red + blue + green / 3;
  let colorSelection = `rgb(${red},${green},${blue})`;

  let column = columns[nthChild];
  column.style.background = colorSelection;
  if (average > 192) {
    column.style.color = runButton.style.color = "black";
  } else {
    column.style.color = runButton.style.color = "white";
  }
  column.innerHTML += column.style.background;
  runButton.style.background = colorSelection;
});

clrButton.addEventListener("click", () => {
  runButton.style.background = null;
  for(let child of columns){
    child.style.backgroundColor = null;
    child.innerHTML = "";  
  };
})

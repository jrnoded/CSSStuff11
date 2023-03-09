const runButton = document.getElementById("run");
const clrButton = document.getElementById("clear");
const score = document.getElementById("score");
const results = document.getElementById("results");
const columns = document.getElementById("container").children;

let presses = 0;
let empties = 12;
let attempts = 0;
showScore();

runButton.addEventListener("click", () => {
  let nthChild = randomNumber(0, 11);
  let red = randomNumber(0, 254);
  let green = randomNumber(0, 254);
  let blue = randomNumber(0, 254);
  let average = red + green + blue / 3;
  let colorSelection = `rgb(${red},${green},${blue})`;
  if (empties <= 0) {
    return;
  }
  presses += 1;
  let column = columns[nthChild];
  column.style.background = colorSelection;
  if (average > 192) {
    column.style.color = runButton.style.color = "black";
  } else {
    column.style.color = runButton.style.color = "white";
  }

  if (column.innerHTML.length == 0) {
    empties -= 1;
  }
  column.innerHTML += column.style.background;
  runButton.style.background = colorSelection;
   showScore();
  if (empties === 0) {
    appendResults();
  }
});

clrButton.addEventListener("click", () => {
  runButton.style.background = null;
  runButton.style.color = "black";
  presses = 0;
  empties = 12;
  for (let child of columns) {
    child.style.backgroundColor = null;
    child.innerHTML = "";
  }
});
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function appendResults() {
  attempts += 1;
  results.innerHTML += `<p>Attempt ${attempts} took ${presses} clicks to fill all columns`;
}
function showScore() {
  score.innerHTML = `Presses: ${presses.toString().padStart(2,'0')} Empty columns: ${empties} `;
}



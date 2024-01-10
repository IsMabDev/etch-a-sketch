console.log("this is sketch.js script");
let gridLength = 4;

const container = document.querySelector("#main-container");
for (let i = 0; i < gridLength; i++) {
  const rowElement = document.createElement("div");
  rowElement.classList.add("row-container");
  for (let j = 0; j < gridLength; j++) {
    const colElement = document.createElement("div");
    colElement.classList.add("grid-element");
    rowElement.appendChild(colElement);
  }
  container.appendChild(rowElement);
}

console.log("this is sketch.js script");
//The initial grid is 50 length
let gridLength = 50;
createGrid();
//adding an event to the button to change the grid length
const button = document.querySelector("#gridNumber");

button.addEventListener("click", () => {
  gridLength = prompt(`Enter The grid length 
    It must be an integer betwee 1 and 100
    ;)`);

  if (
    Number.isInteger(Number(gridLength)) &&
    gridLength > 0 &&
    gridLength <= 100
  ) {
    resetGrid();

    createGrid();
  }
});

//This function remove the container of the grid
function resetGrid() {
  const containerToDelete = document.querySelector("#main-container");
  containerToDelete.remove();
}

//This function create a grid depending on the gridLength
function createGrid() {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  container.setAttribute("id", "main-container");
  body.appendChild(container);
  for (let i = 0; i < gridLength; i++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row-container");
    for (let j = 0; j < gridLength; j++) {
      const colElement = document.createElement("div");
      colElement.classList.add("grid-element");
      colElement.setAttribute("id", "div" + i + j);
      rowElement.appendChild(colElement);
    }
    container.appendChild(rowElement);
    changeBackgroundToRed();
  }
}

//This function is to change the background when hovered
function changeBackgroundToRed() {
  const gridElement = document.querySelectorAll(".grid-element");

  gridElement.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      item.style.backgroundColor = "red";
    });
  });
}

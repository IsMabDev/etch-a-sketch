//The initial grid is 64 length
let gridLength = 4;
let defaultGridColor = "#0000ff";
let colorToChange = "#ff0000";
let userChoice = changeBackgroundToUserColor;

//This function allow the interraction with the user to change the behavior
function changeBehavior(callback) {
  callback();
}

const behaviorButtons = document.querySelector("#behaviorButtons");
behaviorButtons.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "hoveredButton":
      userChoice = changeBackgroundToUserColor;
      resetGrid();
      createGrid();
      break;
    case "rainbowButton":
      userChoice = changeBackgroundToRainbow;
      resetGrid();
      createGrid();
      break;
    case "darkerButton":
      userChoice = changeBackgroundToDarker;
      resetGrid();
      createGrid();
      break;
  }
});

//backgrounds of behavior buttons

const hoveredButton = document.querySelector("#hoveredButton");
const darkerButton = document.querySelector("#darkerButton");

function updateButtons() {
  hoveredButton.style.backgroundColor = defaultGridColor;
  hoveredButton.style.color = colorToChange;
  darkerButton.style.background = `linear-gradient(${defaultGridColor},black)`;
  darkerButton.style.color = colorToChange;
}

createGrid();

//add an event handler for choosing the user's default colors
const userColor = document.querySelector("#userDefaultColor");
userColor.setAttribute("value", defaultGridColor);
userColor.addEventListener("input", (event) => {
  userDefaultColor(event.target.value);
  resetGrid();
  createGrid();
});

//add an event handler for choosing the user's hovered colors
const userHoveredColor = document.querySelector("#userHoveredColor");
userHoveredColor.setAttribute("value", colorToChange);
userHoveredColor.addEventListener("input", (event) => {
  userChangeColor(event.target.value);
  resetGrid();
  createGrid();
});

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

//This function removes the container of the grid
function resetGrid() {
  const containerToDelete = document.querySelector("#main-container");
  containerToDelete.remove();
}

//This function creates a grid depending on the gridLength
function createGrid() {
  const gridContainer = document.querySelector("#gridContainer");
  const container = document.createElement("div");
  container.setAttribute("id", "main-container");
  gridContainer.appendChild(container);
  for (let i = 0; i < gridLength; i++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row-container");
    for (let j = 0; j < gridLength; j++) {
      const colElement = document.createElement("div");
      colElement.classList.add("grid-element");
      colElement.style.backgroundColor = defaultGridColor;
      colElement.setAttribute("id", "div" + i + j);
      rowElement.appendChild(colElement);
    }
    container.appendChild(rowElement);
  }
  updateButtons();

  changeBehavior(userChoice);
}

//This function is to change the background to the user chosen color of each element when hovered
function changeBackgroundToUserColor() {
  const gridElements = document.querySelectorAll(".grid-element");

  gridElements.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      item.style.backgroundColor = colorToChange;
    });
  });
}

function changeBackgroundToRainbow() {
  const gridElements = document.querySelectorAll(".grid-element");

  //a random color is calculated each time the element is hovered
  gridElements.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      item.style.backgroundColor =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
    });
  });
}

function changeBackgroundToDarker() {
  const gridElements = document.querySelectorAll(".grid-element");
  //To get rgb values from the default color
  const rgbFromElement = getComputedStyle(gridElements[0]).backgroundColor;

  //get the rgb from the current element and calculate the incrementation for each color
  const rgbValues = rgbFromElement.match(/\d+/g);
  const redInc = Math.floor(rgbValues[0] / 10);
  const greenInc = Math.floor(rgbValues[1] / 10);
  const blueInc = Math.floor(rgbValues[2] / 10);

  //depending on the current color, the amount of darkness is incremented by 10%
  gridElements.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      const currentRGB = getComputedStyle(item).backgroundColor;
      const rgbFromCurrent = currentRGB.match(/\d+/g);
      const newRed = Number(rgbFromCurrent[0]) - redInc;
      const newGreen = Number(rgbFromCurrent[1]) - greenInc;
      const newBlue = Number(rgbFromCurrent[2]) - blueInc;

      item.style.backgroundColor =
        "rgb(" + newRed + "," + newGreen + "," + newBlue + ")";
    });
  });
}

function userDefaultColor(color) {
  defaultGridColor = color;
}

function userChangeColor(color) {
  colorToChange = color;
}

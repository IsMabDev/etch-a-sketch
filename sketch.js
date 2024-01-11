console.log("this is sketch.js script");
let isGrid = false;
const button = document.querySelector("#gridNumber");
const buttonParentNode = button.parentElement;

button.addEventListener("click", () => {
  gridLength = prompt(`Enter The grid length 
    It must be an integer betwee 1 and 100
    ;)`);

  if (
    Number.isInteger(Number(gridLength)) &&
    gridLength > 0 &&
    gridLength <= 100
  ) {
    if (isGrid === true) {
      resetGrid();
    }
    createGrid();
  }
});
function resetGrid() {
  const containerToDelete = document.querySelector("#main-container");
  containerToDelete.remove();
}
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
    isGrid = true;
    changeBackgroundToRed();
  }
  function changeBackgroundToRed() {
    const gridElement = document.querySelectorAll(".grid-element");

    gridElement.forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        item.style.backgroundColor = "red";
      });
    });
  }
}

//   getComputedStyle(item).backgroundColor);
//item.style.backgroundColor = "rgb(255, 0, 0)";
// });
// });
// gridElement.forEach((item) => {
//   let itemStyle = getComputedStyle(item);
//   console.log(itemStyle.backgroundColor);
// });
// gridElement.forEach((item) => {
//   addEventListener("mouseover", (item) => {
//     let itemStyle = getComputedStyle(item);
//     console.log(itemStyle.backgroundColor);
//   });
// });
// let itemStyle = getComputedStyle(gridElement, ":hover");

// console.log(itemStyle.backgroundColor);

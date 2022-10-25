const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-page");

const createGrid = (amtOfGrids) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 460 / amtOfGrids;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;

      gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = "black";
      });
      row.appendChild(gridBox);
    }
    wrapper.appendChild(row);
  }
  container.appendChild(wrapper);
};

resetButton.addEventListener("click", () => {
  let userSize = Number(
    prompt("Select a number for the dimension of the grid")
  );

  while (userSize > 100) {
    userSize = Number(prompt("Select a dimension for the grid below a 100"));
  }
  const wrapper = document.querySelector(".wrapper");

  if (!wrapper) {
    createGrid(userSize);
  } else {
    wrapper.remove();
    createGrid(userSize);
  }
});

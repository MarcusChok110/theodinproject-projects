createGrid(6, 6);

const btn = document.querySelector("#reset");
btn.addEventListener("click", () => {
    let squares = Math.min(100,
        Number(prompt("How many squares would you like per side? (Max 100 squares)")));
    
    createGrid(squares, squares);
});

function resetGrid() {
    const allGrids = document.querySelectorAll(".grid");
    allGrids.forEach((elem) => {
        elem.style.backgroundColor = "white";
        elem.style.color = "black";
        elem.style.border = "2px solid black";
    });
}

function createGrid(rows, columns) {
    const container = document.querySelector("#container");
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    let columnStr = "";

    for (let i = 0; i < rows; i++) {

        columnStr += "auto ";

        for (let j = 0; j < columns; j++) {

            const gridItem = document.createElement("div");
            gridItem.setAttribute("class", "grid");
            gridItem.style.padding = (60 * 6) / rows + "px";

            gridItem.addEventListener("mouseenter", () => {
                changeBackground(gridItem, "black");
            });

            container.appendChild(gridItem);
        }
    }

    container.style["grid-template-columns"] = columnStr.trim();
}

function changeBackground(item, color) {
    item.style.backgroundColor = color;
    item.style.color = "white";
}


//your JS code here. If required.
    const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");
    const gridItems = document.querySelectorAll(".grid-item");
function resetGrid() {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    }
changeBtn.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

	resetGrid();

	const block = document.getElementById(blockId);
      if (block && color) {
        block.style.backgroundColor = color;
      } else {
        alert("Please enter a valid Block ID (1–9) and a color.");
      }
    });
    resetBtn.addEventListener("click", resetGrid);

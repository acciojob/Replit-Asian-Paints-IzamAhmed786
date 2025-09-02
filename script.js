 const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");
    const gridItems = document.querySelectorAll(".grid-item");

    // Reset function → makes all transparent
    function resetGrid() {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    }

    // Change color function
    changeBtn.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      // reset first
      resetGrid();

      // find block and set color if valid
      const block = document.getElementById(blockId);
      if (block && color) {
        block.style.backgroundColor = color;
      } else {
        alert("Please enter a valid Block ID (1–9) and a color.");
      }
    });

    // Reset button functionality
    resetBtn.addEventListener("click", resetGrid);
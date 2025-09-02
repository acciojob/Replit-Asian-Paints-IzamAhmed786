document.getElementById('change_button').addEventListener('click', function() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    
    // Reset all grid items
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the color of the specified block
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID');
    }
});

document.getElementById('Reset').addEventListener('click', function() {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});
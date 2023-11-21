document.getElementById('increaseTextSize').addEventListener('click', function() {
    const allElements = document.getElementsByTagName('*');

    for (let i = 0; i < allElements.length; i++) {
        const currentStyle = window.getComputedStyle(allElements[i]).fontSize;
        const currentSize = parseFloat(currentStyle); 
        allElements[i].style.fontSize = (currentSize + 1) + 'px';
    }
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "increaseTextSize" || request.action === "decreaseTextSize") {
        changeTextSize(request.action === "increaseTextSize" ? 1 : -1);
    }
});

function changeTextSize(delta) {
    document.querySelectorAll('body, body *').forEach(element => {
        const style = window.getComputedStyle(element);
        const fontSize = parseFloat(style.fontSize);
        element.style.fontSize = (fontSize + delta) + 'px';
    });
}


function applyColorFilter() {
    const link = document.createElement('link');
    console.log("link"+link);
    link.href = chrome.runtime.getURL('color_filter.css');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "applyColorFilter") {
        applyColorFilter();
    }
});



chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "selectedText") {
        console.log("Selected text: ", message.text);
    }
});
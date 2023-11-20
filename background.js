chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed/updated');
});

chrome.runtime.onStartup.addListener(() => {
    console.log('Browser started, extension loaded');
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "applyColorFilter") {
     
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            
            if (tabs[0]) {
             
                chrome.tabs.sendMessage(tabs[0].id, request, response => {
                    if (chrome.runtime.lastError) {
           
                        console.error(`Error sending message to tab: ${chrome.runtime.lastError.message}`);
                    }
 
                });
            }
        });
    }

    return true;
});

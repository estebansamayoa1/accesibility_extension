chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.action === "applyFilter") {
        const filterStyle = document.createElement('style');
        filterStyle.innerHTML = `html { filter: contrast(125%) hue-rotate(-10deg) saturate(150%) !important; }`;
        document.head.appendChild(filterStyle);
      }
    }
  );



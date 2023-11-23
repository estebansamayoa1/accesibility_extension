chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      if(request.action === "option1") {
        const filterStyle = document.createElement('style');
        filterStyle.innerHTML = `html { filter: grayscale(100%) brightness(100%); }`;
        document.head.appendChild(filterStyle); 
      }
      if(request.action === "option2") {
        const filterStyle = document.createElement('style');
        filterStyle.innerHTML = `html { filter: saturate(150%) hue-rotate(45deg) brightness(100%); }`;
        document.head.appendChild(filterStyle); 
      }
      if(request.action === "option3") {
        const filterStyle = document.createElement('style');
        filterStyle.innerHTML = `html { filter: invert(100%); }`;
        document.head.appendChild(filterStyle); 
      }
      if(request.action === "option4") {
        const filterStyle = document.createElement('style');
        filterStyle.innerHTML = `html { filter: saturate(150%) hue-rotate(90deg) brightness(100%); }`;
        document.head.appendChild(filterStyle); 
      }
      if (request.action === "applyFilters") {
        const filters = request.filters;
        const filterStyle = `brightness(${filters.brightness}%) 
                             saturate(${filters.saturation}%) 
                             hue-rotate(${filters.hue}deg) 
                             invert(${filters.invert}%) 
                             sepia(${filters.sepia}%)`;

        document.body.style.filter = filterStyle;
    }
    if (request.action === "resetFilters") {
      document.body.style.filter = ''; // Reset filters
    }
    }
  );


document.getElementById('option1').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "option1"});
    });
  });

document.getElementById('option2').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "option2"});
    });
  });


document.getElementById('option3').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "option3"});
    });
  });


document.getElementById('option4').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "option4"});
    });
  });


// document.getElementById('increase-text-size').addEventListener('click', () => {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {action: "increaseTextSize"});
//     });
// });

// document.getElementById('decrease-text-size').addEventListener('click', () => {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {action: "decreaseTextSize"});
//     });
// });


// document.getElementById('increaseTextSize').addEventListener('click', function() {
//   const allElements = document.getElementsByTagName('*');

//   for (let i = 0; i < allElements.length; i++) {
//       const currentStyle = window.getComputedStyle(allElements[i]).fontSize;
//       const currentSize = parseFloat(currentStyle); 
//       allElements[i].style.fontSize = (currentSize + 1) + 'px';
//   }
// });


document.getElementById('applyFilters').addEventListener('click', () => {
      const brightness = document.getElementById('brightness').value;
      const saturation = document.getElementById('saturation').value;
      const hue = document.getElementById('hue').value;
      const invert = document.getElementById('invert').value;
      const sepia = document.getElementById('sepia').value;

      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, {
              action: "applyFilters",
              filters: {
                  brightness,
                  saturation,
                  hue,
                  invert,
                  sepia
              }
          });
      });
});


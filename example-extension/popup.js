// Change the page style by applying an additional stylesheet to the webpage loaded in the tab.
function doActionCSS() {
  chrome.tabs.insertCSS({file: '/change-page.css'});
}

// Run additional javascript code on the webpage loaded in the tab.
function doActionReset() {
  chrome.tabs.executeScript({file: '/change-page.js'});
  window.close();
}

// Connect the buttons in the popup with the above functions.
document.querySelector('#action-css').onclick = doActionCSS;
document.querySelector('#action-reset').onclick = doActionReset

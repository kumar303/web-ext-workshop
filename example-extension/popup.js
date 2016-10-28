function doActionCSS() {
  chrome.tabs.insertCSS({code: 'body { display: none; }'}); 
}

function doActionReset() {
  chrome.tabs.executeScript({code: 'window.location.reload();'});
  window.close();
}

document.querySelector('#action-css').onclick = doActionCSS;
document.querySelector('#action-reset').onclick = doActionReset

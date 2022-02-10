// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url) {
    decoded = decodeURI(tab.url);
    console.log(decoded);
    copyToClipboard(decoded);
  }
});


function copyToClipboard(text) {
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
};
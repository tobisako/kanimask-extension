var injectScript;

injectScript = function (file, node) {
  var s, th;
  th = document.getElementsByTagName(node)[0];
  s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  return th.appendChild(s);
};

injectScript(chrome.extension.getURL('/kani3_scripts.bundle.js'), 'body');

// 受信側 other tab -> contents(popup/option -> contents)
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('kanimsg:' + message);

  // appendLog
  const li = document.createElement('li');
  li.innerHTML = '<p><img src="src/img/kani_48.png" /></p>';
  document.getElementById('kani-messages').appendChild(li);
  document.getElementById('kani-area').scrollTop = document.getElementById('kani-area').scrollHeight;

  return;
});

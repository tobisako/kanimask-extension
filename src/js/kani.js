var cnt = 0;

const onButton = () => {
  cnt++;
  console.log(`カニが${cnt}ひき`);

  // popup->contents通信用
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('kani-send!');
    chrome.tabs.sendMessage(tabs[0].id, JSON.stringify({ contents: 'test value from kani-popup' }), function (
      response
    ) {});
  });
};

const ele_btn = document.getElementById('test-btn');
ele_btn.onclick = onButton;

console.log('kani.js ready.');

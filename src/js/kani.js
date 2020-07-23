var cnt = 0;

const onButton = () => {
  cnt++;
  console.log(`カニが${cnt}ひき`);
};

const ele_btn = document.getElementById('test-btn');
ele_btn.onclick = onButton;

console.log('kani.js ready.');

const multiplyBtn = document.getElementById('multiplyBtn');
const resultElement = document.getElementById('result');

multiplyBtn.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  
  const result = num1 * num2;
  
  resultElement.textContent = `Result: ${result}`;
});

const keys = document.querySelectorAll('.key');
const displayInput = document.querySelector('.display .input');
const displayOutput = document.querySelector('.display .output');
let input = "";

for (let key of keys) {
  let value = key.dataset.key;
  key.addEventListener('click', () => {
    if (value === "clear") {
      input = "";
      displayInput.innerHTML = "";
      displayOutput.innerHTML = "";
    } else if (value === "backspace") {
      input = input.slice(0, -1);
      displayInput.innerHTML = input;
    } else if (value === "=") {
      let result = eval(input);
      displayOutput.innerHTML = result;
    } else {
      input += value;
      displayInput.innerHTML = input;
    }
  });
}

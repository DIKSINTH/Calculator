// script.js
/*
let currentInput = "";

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === "") return;
  const lastChar = currentInput[currentInput.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) return;
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}*/

function zero() {
  document.getElementById("num");
}

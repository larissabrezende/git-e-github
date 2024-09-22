const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value;
      input.value += value;
    });
  });

  document.getElementById("clear").addEventListener("click", function () {
    input.value = "";
    resultInput.value = "";
    input.focus();
    resultInput.classList.remove("error");
    
    const copyButton = document.getElementById("copyToClipboard");
    if (copyButton.innerText === "Copied!") {
      copyButton.innerText = "Copy";
      copyButton.classList.remove("success");
    }
  });

  input.addEventListener("keydown", function (ev) {
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key;
      return;
    }
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1);
    }
    if (ev.key === "Enter") {
      calculate();
    }
  });

  function calculate() {
    resultInput.value = "ERROR";
    resultInput.classList.add("error");
    try {
      const result = eval(input.value);
      resultInput.value = result;
      resultInput.classList.remove("error");
    } catch (e) {
      resultInput.value = "ERROR";
      resultInput.classList.add("error");
    }
  }
  
  document.getElementById("equal").addEventListener("click", calculate);

  document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });
  
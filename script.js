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
  
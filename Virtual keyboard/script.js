let buttons = document.querySelectorAll("button");
let input = document.getElementById("inputBox");
let isUpper = false;

let lettersArr = [];
for (button of buttons) {
  lettersArr.push(button.innerText.toLowerCase());
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].id = buttons[i].innerText;
  buttons[i].innerText = buttons[i].innerText.toLowerCase();

  buttons[i].addEventListener("click", function () {
    if (buttons[i].id !== "Space") {
      lettersArr = input.value += buttons[i].innerText;
    }
    if (buttons[i].id === "Space") {
      input.value += " ";
    }

    // MAIUSC FEATURE
    if (buttons[i].id === "MAIUSC") {
      //   for (button of buttons) {
      //     if (isUpper == true) {
      //       button.innerText = button.innerText.toLowerCase();
      //     }
      //     button.innerText = button.innerText.toUpperCase();
      //     isUpper = true;
      //   }
    }
  });
}

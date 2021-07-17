let radioButtonMale = document.getElementById("radioMale");
let radioButtonFemale = document.getElementById("radioFemale");
let nameText = document.getElementById("LabelText");
let nameAlert = document.getElementById("alert");
let submitButton = document.getElementById("submit");
let passwordText = document.getElementById("LabelPass");
let passwordAlert = document.getElementById("alertPass");

submitButton.addEventListener("click", (e) => {
  if (nameText.value.length <= 3) {
    nameAlert.innerText = "The name has to be more than 3 characters";
  } else {
    nameAlert.innerText = "";
  }

  if (nameText.value == "") {
    nameAlert.innerText = "Name is requested!";
  }

  if (passwordText.value.length <= 10) {
    passwordAlert.innerText = "The password has to be minimum 10 characters";
  } else {
    passwordAlert.innerText = "";
  }
  if (!passwordText.value.includes("@")) {
    passwordAlert.innerText = "Inserire almeno un carattere speciale";
  }

  if (passwordText.value == "") {
    passwordAlert.innerText = "Password is required !";
  }

  e.preventDefault();
});

console.log(nameText.value.length);
console.log(passwordText.value.length);
console.log(nameAlert.innerText);

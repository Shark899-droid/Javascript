let radioButtonMale = document.getElementById("radioMale");
let radioButtonFemale = document.getElementById("radioFemale");
let nameText = document.getElementById("LabelText");
let nameAlert = document.getElementById("alert");

nameText.addEventListener("focus", function () {});

console.log(nameText);
if (nameText.value.length < 3) {
  nameAlert.innerText = "User has to be minimum 3 letters";
} else {
  nameAlert.innerText = "";
}

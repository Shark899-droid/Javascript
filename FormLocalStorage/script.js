const btnSend = document.querySelector("#btnSend");
const btnReset = document.querySelector("#btnReset");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const textMessage = document.querySelector("#textMessage");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

btnSend.addEventListener("click", (e) => {
  localStorage.setItem("name", `${inputName.value}`);
  localStorage.setItem("email", `${inputEmail.value}`);
  localStorage.setItem("message", `${textMessage.value}`);
});

btnReset.addEventListener("click", () => {
  localStorage.clear();
});

const btn = document.getElementById("btn");
const message = document.getElementById("message");
const container = document.querySelector("span");

btn.addEventListener("click", () => {
  if (message.value === "") {
    return;
  }
  container.innerText = message.value;
  message.value = "";
});

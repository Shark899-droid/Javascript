const button = document.querySelector(".btn");
const containerh1 = document.querySelector(".containerh1");
const containerImage = document.querySelector(".containerImage");

button.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      containerh1.innerText = data.value;
      containerImage.src = data.icon_url;
    });
});

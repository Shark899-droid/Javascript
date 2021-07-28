const cityTake = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const sky = document.querySelector(".sky");
const temperature1 = document.querySelector(".temperature1");
const temperature2 = document.querySelector(".temperature2");
const temperature3 = document.querySelector(".temperature3");
const wind1 = document.querySelector(".wind1");
const wind2 = document.querySelector(".wind2");
const wind3 = document.querySelector(".wind3");
const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");
const inputField = document.querySelector(".inputWeather");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  let city = inputField.value;
  takeWeather(city);
});

function takeWeather(city) {
  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      temperature.innerText = `Temperature:${data.temperature}`;
      wind.innerText = `Wind:${data.wind}`;
      sky.innerText = `Sky:${data.description}`;
      temperature1.innerText = `T:${data.forecast[0].temperature}`;
      temperature2.innerText = `T: ${data.forecast[1].temperature}`;
      temperature3.innerText = `T:${data.forecast[2].temperature}`;
      wind1.innerText = `W:${data.forecast[0].wind}`;
      wind2.innerText = `W:${data.forecast[1].wind}`;
      wind3.innerText = `W:${data.forecast[2].wind}`;
      day1.innerText = `Tomorrow:`;
      day2.innerText = `BisTomorrow:`;
      day3.innerText = `TrisTomorrow:`;
    });
  cityTake.innerText = city;
}

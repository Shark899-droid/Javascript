const addRecipeButton = document.querySelector("#addRecipeButton");
const mainPageContainer = document.querySelector(".mainPageContainer");
const addRecipeContainer = document.querySelector(".addRecipeContainer");
const addIngredient = document.querySelector(".addRecipeButton1");
const takeIngredient = document.querySelector("#takeIngredient");
const popUp = document.querySelector(".pop-up");

// BUTTON ADD RECIPE MAIN CONTAINER

// addRecipeButton.addEventListener("click", () => {
//   mainPageContainer.style.display = "none";
//   addRecipeContainer.style.display = "flex";
// });

// SECOND PAGE LOGIC

addIngredient.addEventListener("click", () => {
  idNum++;
  popUp.insertAdjacentHTML(
    "beforeend",
    `<div class="pop-up-interior">
        <input type="checkbox" />
        <span>${takeIngredient.value}</span>
        <img src="./assets/delete.svg" alt="delete"/>
        </div>`
  );
  takeIngredient.value = "";
});

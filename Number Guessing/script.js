const inp = document.querySelector("input");
const inpBtn = document.querySelector("button");
const previous = document.querySelector("#previous");
const remaining = document.querySelector("#remaining");
const foot = document.querySelector("#foot");

const randomChoice = Math.floor(Math.random() * 100);
let Remaininguesses = 10;
let PreviousGuess = 0;

inpBtn.addEventListener("click", () => {
    const myChoice = inp.value;
    if (myChoice === randomChoice.toString()) {
        foot.innerText = "You Won !!!";
        reload()
    }
    else if (myChoice < randomChoice) {
        foot.innerText = "Too low! Try again!"
        inp.value=""
        Remaininguesses--;
        PreviousGuess++;
        previous.innerText = PreviousGuess;
        remaining.innerText = Remaininguesses;
        if (Remaininguesses <= 0) {
            foot.innerText = "You lost"
            reload()
        }
    }
    else if (myChoice > randomChoice) {
         foot.innerText = "Too High! Try again!"
        inp.value=""
        Remaininguesses--;
        PreviousGuess++;
        previous.innerText = PreviousGuess;
        remaining.innerText = Remaininguesses;
         if (Remaininguesses <= 0) {
             foot.innerText = "You lost"
             reload()
        }
    }

    function reload() {
        inp.disabled = true;
        inpBtn.disabled = true;
        setTimeout(() => {
            window.location.reload();
        },5000)
    }
    
})
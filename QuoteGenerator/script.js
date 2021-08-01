const write = document.querySelector("h1");
const author = document.querySelector("p");
const btn = document.querySelector(".btn");

function takeQuotes() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const randomquote = Math.floor(Math.random() * 10);
      write.innerText = `${data.data[randomquote].quoteText}`;
      author.innerText = `${data.data[randomquote].quoteAuthor}`;
    });
}
takeQuotes();

btn.addEventListener("click", takeQuotes);

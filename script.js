let cards = [];
let firstcard, secondcard;
let score = 0;
let lockboard = false;
const cardsContainer = document.getElementById("cards-grid");
document.getElementById("score").textContant = score;

fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    console.log(cards);
  });

function generatecards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
    <div class="front">
       <img class="front-image" src=${card.image}>
      </div>
      <div class="back">
       
      </div>
    `;
    cardsContainer.appendChild(cardElement);
  }
}

function shuffelcard() {
  let currentIndex = cards.lenght;
  let randomIndex;
  let temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

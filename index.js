let messageEl = document.getElementById("message");
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let money = document.getElementById("money");
let somme = 0;
let card1,
    card2 = 0;
let cardsArr = [];
const startBtn = document.getElementById("strBtn");
const newBtn = document.getElementById("newBtn");
let isAlive = true;
let hasBlackJack = false;

function getRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 12);
    if (randomNumber > 10) {
        randomNumber = 10;
    } else if (randomNumber == 1) {
        randomNumber = 11;
    }
    return randomNumber;
}

startBtn.addEventListener("click", function () {
    isAlive = true;
    hasBlackJack = false;
    card1 = getRandomNumber();
    card2 = getRandomNumber();
    cardsArr = [card1, card2];
    somme = card1 + card2;
    render();
});

function render() {
    sumEl.textContent = `Sum : ${somme}`;
    for (let i = 0; i < cardsArr.length; i++) {
        cardsEl.textContent = `Cards :${cardsArr.join("-")}`;
    }
    if (somme < 21) {
        isAlive = true;
        messageEl.textContent = "do you want to pick a new card";
    }
    if (somme > 21) {
        isAlive = false;
        messageEl.textContent = "You Lose";
    }
    if (somme == 21) {
        hasBlackJack = true;
        messageEl.textContent = "You Won";
    }
}

newBtn.addEventListener("click", function () {
    if (isAlive == true) {
        let card3 = getRandomNumber();
        cardsArr.push(card3);
        somme += card3;
    }
    render();
});

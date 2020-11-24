/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = function() {
  let suits = ["heart", "club", "spade", "diamond"];
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let card = document.querySelector(".card");
  let cardNumber = document.querySelector("h1");

  card.classList.add(suits[getRandomInt(0, suits.length)]);
  card.innerHTML = cards[getRandomInt(0, cards.length)];
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let getRandomOfNumber = () => {
  let numberOfCards = ["J", "k", "A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let randomNumber = Math.floor(Math.random() * numberOfCards.length)
  return numberOfCards[randomNumber]
}

function getOfSuit() {
  let suitOfCards = ["♥", "♦", "♠", "♣"]
  let randomSuit = Math.floor(Math.random() * suitOfCards.length)
  return suitOfCards[randomSuit]
}

// let generateSumAllArray = getRandomOfCards[numberOfCards] + getRandomOfCards[suitOfCards]
let number = getRandomOfNumber();
let suit = getOfSuit();

let color = (suit === "♥" || suit === "♠") ? "red" : "black"

//write your code here 


document.querySelector(".number").innerHTML = number;
document.querySelector(".suit").innerHTML = suit;
document.querySelector(".right-bottom-suit").innerHTML = suit;

document.querySelector(".suit").style.color = color;
document.querySelector(".right-bottom-suit").style.color = color;


const $h1 = $("<h1>");

const $container = $("<div>").addClass("container");

$h1.text("What do your cards reveal?").addClass("center");

const $mainImgDiv = $("<div>").text("Draw a card").attr("id", "mainCard");


const cards = [
  "https://www.trustedtarot.com/img/cards/the-fool.png",
  "https://www.trustedtarot.com/img/cards/the-magician.png",
  "https://www.trustedtarot.com/img/cards/the-high-priestess.png",
  "https://www.trustedtarot.com/img/cards/the-empress.png",
  "https://www.trustedtarot.com/img/cards/the-emperor.png",
  "https://www.trustedtarot.com/img/cards/the-heirophant.png",
  "https://www.trustedtarot.com/img/cards/the-chariot.png",
  "https://www.trustedtarot.com/img/cards/strength.png",
  "https://www.trustedtarot.com/img/cards/the-hermit.png",
  "https://www.trustedtarot.com/img/cards/wheel-of-fortune.png",
  "https://www.trustedtarot.com/img/cards/justice.png",
  "https://www.trustedtarot.com/img/cards/the-hanged-man.png",
  "https://www.trustedtarot.com/img/cards/death.png",
  "https://www.trustedtarot.com/img/cards/temperance.png",
  "https://www.trustedtarot.com/img/cards/the-tower.png",
  "https://www.trustedtarot.com/img/cards/the-moon.png",
];

let pickedCards = []

const cardAdder = (arr,i) => {

let $imgCard = $('<img>')
let indexRando = Math.floor(Math.random() * Math.floor(cards.length))
let cardRando = cards[indexRando];
if (pickedCards.length===16) {
  alert('Deck is empty! Please put some cards back!')
} else {

$imgCard.attr('src', cardRando)
.on('click', removeCard)

cards.splice(indexRando,1)

$container.append($imgCard)
.css("position", "absolute")

pickedCards.push(cardRando)
}
}
$mainImgDiv.on("click", cardAdder);

function removeCard() {
  removedCardSrc = $(this).attr('src')
  pickedCards.splice($(this),1)
  cards.push(removedCardSrc)
  $(this).remove()
}

$("body").append($h1);
$("body").append($mainImgDiv);
$("body").append($container);
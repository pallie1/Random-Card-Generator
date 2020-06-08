console.log("we're connected");

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

console.log("length of og cards array - ", cards.length);


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


console.log('pickedCards array - ', pickedCards)
console.log('OG cards new length - ', cards.length)
}
}
$mainImgDiv.on("click", cardAdder);


//keep these boisss
function removeCard() {
  removedCardSrc = $(this).attr('src')
  pickedCards.splice($(this),1)
  cards.push(removedCardSrc)
  console.log('this is what removedCardSrc is - ', removedCardSrc)
  $(this).remove()
  console.log('cards length adding hopefully - ', cards.length)
}


$("body").append($h1);
$("body").append($mainImgDiv);
$("body").append($container);







//////////////
//dead code zone! stuff I tried and then discarded. 
/////////////

// $newImgDiv = $("div").addClass("square");
// working rando card
// change this so its run and adds a new card each time it's clicked
// const deltaArrays = (arr, i) => {
//   let newArray = [];
//   let oldArray = arr;
//   let mathRando = Math.floor(Math.random() * Math.floor(arr.length));

//   newArray = oldArray.splice(mathRando, 1);


//   console.log("newArray - ", newArray);
//   console.log("oldArray - ", oldArray);

//   return newArray;
// };

// let newCard = deltaArrays(cards);

// console.log("newCard - ", newCard);

// // workingishhhh
// const appearNextCard = (d, i) => {
//   let $cardElement = $("<img>");
//   $cardElement.attr("src", newCard)
//     .attr("data-id", i);

//   $container.append($cardElement).css("position", "absolute");
// };

// $mainImgDiv.on("click", appearNextCard);

// playing around with this
// const deltaArrays = (arr, i) => {

//     let newArray = [];
//     let oldArray = arr;
//     let mathRando = Math.floor(Math.random() * Math.floor(arr.length));
    
//     for (let i=arr.length-1; i=0; i) {

//         // newArray = oldArray.splice(mathRando, 1);
//         newArray = oldArray.splice(mathRando, 1)
        
    
//         console.log("newArray - ", newArray);
//         console.log("oldArray - ", oldArray);
    
//         return  newArray = newArray.push(newArray);
//     }
//   };
  
//   let newCard = deltaArrays(cards);

 
  
  // console.log("newCard - ", newCard);



// const newDivOnClick = $(document).ready(function() {
//     $('#mainCard').click(function(e) {
//         $container.append($newImgDiv).css('position', 'absolute')
//     })
// })

// console.log("cards length - ", cards.length);



// playing around with cards.length but now it
// const appearNextCard = (d, i) => {
//     for (let i=0; i < cards.length; i++) {
//       let $cardElement = $("<img>");
//       $cardElement.attr("src", newCard[0]).attr("data-id", i);

//       $container.append($cardElement).css("position", "absolute");
//     } if (i==0) {
//         alert('There are no more cards in the deck. Please put some back!')
//     }
//   };

// $mainImgDiv.on("click", appearNextCard);



// ADD AN EVENT LISTENER ON CLICK ONE FOR PICK A CARD THAT ADDS A CARD
// ADD ANOTHER EVENT LISTENER ON ALL THE DRAWN CARDS THAT PUTS THEM BACK

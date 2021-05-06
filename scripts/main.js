// window.addEventListener('DOMContentLoaded', function () {
// Execute after page load
let dealerHandContainer = document.getElementById("dealer-hand")
let playerHandContainer = document.getElementById("player-hand");
let standbutton = document.getElementById("stand-button");
let hitbutton = document.getElementById("hit-button");
let dealbutton = document.getElementById("deal-button");
let suits = ["spades", "hearts", "diamonds", "clubs",];
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let deck = []
let cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
let dealer = []
let player = []



// deck
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        for(let p = 0; p < cardValue.length; p++){
             var cards = {
                 cardValue: cardValue[p],  values: values[x], suit: suits[i], Image: `images/${values[x]}_of_${suits[i]}.png`
        }}
        deck.push(cards)
    }
}
console.log(deck)

function getCardImage(card, container) {
    let image = document.createElement("img")
    image.src = `images/${card.values}_of_${card.suit}.png`
    container.appendChild(image)


}


// function for deal click pop 4 cards

dealbutton.addEventListener("click", (e) => {

    dealerCard()
})
hitbutton.addEventListener("click", (e) => {
    hitCard()
})


standbutton.addEventListener("click", (e) => {
    console.log(e)
    // pop
})



// getCardImage 




function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}



function dealerCard() {
    let card1 = deck.pop();
    dealer.push(card1);
    getCardImage(card1, dealerHandContainer)
    let card2 = deck.pop()
    dealer.push(card2);
    getCardImage(card2, dealerHandContainer)
    let card3 = deck.pop()
    player.push(card3);
    getCardImage(card3, playerHandContainer)
    let card4 = deck.pop()
    player.push(card4);
    getCardImage(card4, playerHandContainer)
}
function hitCard() {
    let card5 = deck.pop()
    player.push(card5)
    let card6 = deck.pop(
        dealer.push(card5)
    )
    getCardImage(card5, playerHandContainer)
    // console.log(hitCard)\
}

function calculatePoints(){
  for( var currentPlayer = 0; card.length; card++){

  }
   
   
   
        


}
// GLOBAL SCOPE //
 const deck = document.querySelector('.deck'); // Selects entire deck
 let openCards = []; // List of open cards


//DECK, CARDS, SHUFFLE//
/*
 * Create a list that holds all of your cards
 */
 const singleCards = Array.from(document.querySelectorAll('.deck li')); //Selects individual cards and makes list

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function displayCards() { // Declare function displaying cards
  shuffle(singleCards);
  for (let card of singleCards) { // Loop through each card
    deck.appendChild(card)
  }
}
displayCards(); // Call function


// EVENT LISTENERS FOR CLICK, SHOW, OPEN, MATCH, COUNTER //
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

deck.addEventListener('click', function(evt) { // Card Clicked
  const clickCard = evt.target;
  showCard(clickCard);
  openCard(clickCard);
});

function showCard(clickCard) { // Show card & keep open to be checked for match
  clickCard.classList.toggle('show');
  clickCard.classList.toggle('open');
}

function openCard(clickCard) { // Adds to list of open cards
  openCards.push(clickCard);
    if (openCards === 2) {
      checkMatchCard();
      moveCount();
    } else {
      closeCard();
    }
}

/*function checkMatchCard() { // Check for match

}

function matchCard() { // Cards matched

}

function closeCard() { // Cards don't match

}

function moveCount() { //Counts moves

}

function gameComplete() { //Alert

}
*/

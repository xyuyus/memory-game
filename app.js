document.addEventListener('DOMContentLoaded', createGameBoard);

const cardArray = [{
    name: "pic1",
    image: "1 2.jfif"
},
{
    name: "pic1",
    image: "1 2.jfif"
},
{
    name: "pic2",
    image: "3 4.jfif"
},
{
    name: "pic2",
    image: "3 4.jfif"
},
{
    name: "pic3",
    image: "5 6.jfif"
},
{
    name: "pic3",
    image: "5 6.jfif"
},
{
    name: "pic4",
    image: "7 8.jfif"
},
{
    name: "pic4",
    image: "7 8.jfif"
},
{
    name: "pic5",
    image: "9 10.jfif"
},
{
    name: "pic5",
    image: "9 10.jfif"
},
{
    name: "pic6",
    image: "11 12.jfif"
},
{
    name: "pic6",
    image: "11 12.jfif"
}];

function createGameBoard() {
    let gameboard = document.getElementById('gameBoard');

    let gridContainer = document.createElement('div');
    gridContainer.className = 'grid';

    for (let i = 0; i < 12; i++) {
        let item = document.createElement('div');
        item.className = 'item'

        card = document.createElement('img');
        card.setAttribute('src', 'card_back.jfif');
        card.setAttribute('id', i);
        // card.setAttribute('onclick', 'flipCard()')
        card.addEventListener('click', flipCard);

        item.appendChild(card);
        gridContainer.appendChild(item);
    }
    gameboard.appendChild(gridContainer);
    cardArray.sort(() => 0.5 - Math.random())
}
let cardChoosen = []
let cardChoosenId = []
let score = 0

function flipCard() {
    let cardId = this.getAttribute('id');
    this.setAttribute('src', cardArray[cardId].image);
    cardChoosen.push(cardArray[cardId]);
    cardChoosenId.push(cardId);
    if(cardChoosen.length === 2){
        setTimeout(checkForMatch, 500);
    }

}
function checkForMatch() {
    const cards = document.querySelectorAll('img');

    let selectedCardOne = cardChoosenId[0];
    let selectedCardTwo = cardChoosenId[1];

    let consoleMessage = "";

    if(cardChoosen[0].name === cardChoosen[1].name) {
        cards[selectedCardOne].setAttribute('src', 'white.png');
        cards[selectedCardTwo].setAttribute('src', 'white.png');
        score = score + 1;
        consoleMessage = "You found a match!!"
    } else {
        cards[selectedCardOne].setAttribute('src', 'card_back.jfif');
        cards[selectedCardTwo].setAttribute('src', 'card_back.jfif');
        consoleMessage = "Sorry, try again...";

    }
document.getElementById('gameScore').textContent = score;
document.getElementById("gameConsole").textContent = consoleMessage;


    cardChoosen = []
    cardChoosenId = []

    if(score === cardArray.length / 2){
        document.getElementById("gameConsole").textContent = 'Congratulations! You found them all'
    }
}
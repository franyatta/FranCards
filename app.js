const term = document.querySelector('.tile__face--front');
const definition = document.querySelector('.tile__face--back');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const tile = document.querySelector(".tile");

const data = require('./data.json'); 
console.log(data);

tile.addEventListener("click", function() {
    tile.classList.toggle("is-flipped");
});

function getRandomWord(term, definition) {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`
};


nextButton.addEventListener('click', function() {
    tile.classList.remove("is-flipped");
    getRandomWord();
});

previousButton.addEventListener('click', function() {

});

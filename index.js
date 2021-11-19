const data = document.getElementById('data');

const result = document.getElementById('responce');
const resulttwo = document.getElementById('responce2');
const resultthre = document.getElementById('responce3');
const resultfour = document.getElementById('responce4');
const resultfive = document.getElementById('responce5');
const resultsix = document.getElementById('responce6');

data.addEventListener('click', cards);

function cards() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=6')
    .then(res => res.json())
    .then(data => {
        console.log(data.cards[0].image);
        result.innerHTML = `<img src=${data.cards[0].image} alt="cards" />`
        resulttwo.innerHTML = `<img src=${data.cards[1].image} alt="cards" />`
        resultthre.innerHTML = `<img src=${data.cards[2].image} alt="cards" />`
        resultfour.innerHTML = `<img src=${data.cards[3].image} alt="cards" />`
        resultfive.innerHTML = `<img src=${data.cards[4].image} alt="cards" />`
        resultsix.innerHTML = `<img src=${data.cards[5].image} alt="cards" />`

    });
}
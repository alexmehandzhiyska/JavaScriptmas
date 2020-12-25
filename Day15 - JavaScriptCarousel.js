const gallery = document.querySelector('.gallery');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const cards = document.querySelectorAll('.card');
let counter = 0;

previous.addEventListener('click', function () {
    counter--;
});
next.addEventListener('click', function () {
    counter++;
});
fn();

document.addEventListener('keydown', function (a) {
    if (a.keyCode == 39) {
        counter++;
    } else if (a.keyCode == 37) {
        counter--;
    }
    fn();
});

function fn() {
    if (counter == cards.length) {
        counter = 0;
    } else if (counter < 0) {
        counter = cards.length - 1;
    }
    cards.forEach(
        (card) => (card.style.transform = `translateX(-${counter * 220}px`)
    );
}

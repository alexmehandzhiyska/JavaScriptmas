const box = document.getElementById('string');
const btn = document.getElementById('btn');
const counter = document.getElementById('counterFooter');

function checkCharsCount() {
    let curCharsCount = box.value.length;
    const charsLeft = 140 - curCharsCount;
    counter.innerHTML = `${charsLeft}/140`;
    counter.style.color = charsLeft <= 20 ? 'red' : 'white';
    curCharsCount <= 140
        ? btn.classList.remove('buttonDisabled')
        : btn.classList.add('buttonDisabled');
}

box.addEventListener('keyup', checkCharsCount);
box.addEventListener('keydown', checkCharsCount);

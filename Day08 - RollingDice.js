let dice = document.querySelector('.dice');
let createDot = function () {
    let dot = document.createElement('li');
    dot.className = 'dot';
    dice.appendChild(dot);
};

let createFace = (random) => {
    for (let i = 0; i < random; i++) createDot();
    dice.className = 'dice';
    let classFace = '';
    let obj = { 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six ' };
    classFace = obj[random];
    dice.className += ` ${classFace}`;
};

dice.addEventListener('click', () => {
    dice.innerHTML = '';
    let random = Math.floor(Math.random() * 6) + 1;
    createFace(random);
});

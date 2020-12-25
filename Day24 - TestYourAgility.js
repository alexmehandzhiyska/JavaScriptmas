var pushed = false;
var targetInt;
var spinningElem = document.getElementById('spinning');

document
    .getElementById('buttonPressed')
    .addEventListener('click', buttonPressed);

function buttonPressed() {
    pushed = true;
}

function setTargetInt() {
    var targetElem = document.getElementById('targetNum');
    targetInt = Math.floor(Math.random() * 101);
    targetElem.innerHTML = targetInt;
}

const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const spin = async () => {
    for (var num = 0; num <= 100; num++) {
        if (pushed) {
            stop(num);
            break;
        } else {
            spinningElem.innerHTML = num;
            await sleep(75);
        }
        if (num == 100) {
            num = 0;
        }
    }
};

function stop(num) {
    const difference = Math.abs(num - (targetInt + 1));
    const message =
        difference == 0 ? 'You Win!' : `Oh no, you lose! Off by ${difference}`;
    const result = document.getElementById('result');
    result.innerHTML = message;
}

setTargetInt();
spin();

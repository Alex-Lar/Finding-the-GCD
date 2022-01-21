'use strict';
let inputBtn = document.querySelector('#input-btn'),
    outputBtn = document.querySelector('#output-btn'),
    firstMultipliers,
    secondMultipliers,
    factIteration = 1;

let firstNum,
    secondNum,
    CommDivisor;


inputBtn.addEventListener('click', function () {
    firstMultipliers = [];
    secondMultipliers = [];

    firstNum = parseInt(prompt('Enter the first number:'));
    secondNum = parseInt(prompt('Enter the second number:'));
    if (!parseInt(firstNum) || !parseInt(secondNum)) {
        alert('Error! Values not entered or entered incorrectly!');
        while (!parseInt(firstNum) || !parseInt(secondNum)) {
            firstNum = parseInt(prompt('Enter the first number:'));
            secondNum = parseInt(prompt('Enter the second number:'));
        }
    }

    factorize(firstNum);
    factorize(secondNum);

    findGCD(firstMultipliers, secondMultipliers);

    factIteration = 1;
});

outputBtn.addEventListener('click', function () {

});


//Функция разложения числа на множители
function factorize(factNum) {
    if (factIteration === 1) {
        let i = 2;
        while (factNum !== 1) {
            if (factNum % i === 0) {
                factNum /= i;
                firstMultipliers.push(i);
            } else if (factNum % i !== 0) {
                i++;
            }
        }
        factIteration++;
        return firstMultipliers;
    }
    else if (factIteration === 2) {
        let i = 2;
        while (factNum !== 1) {
            if (factNum % i === 0) {
                factNum /= i;
                secondMultipliers.push(i);
            } else if (factNum % i !== 0) {
                i++;
            }
        }
        return secondMultipliers;
    }
}


function findGCD(firstArray, secArray) {
    let prodOfNum = [];

    for (let i = 0; i <= firstArray.length - 1; i++) {
        if (secArray.includes(firstArray[i])) {
            prodOfNum.push(firstArray[i]);
            secArray.splice(secArray.indexOf(firstArray[i]), 1);
        }
    }

    if (prodOfNum.length === 0) {
        return alert('For these numbers there is no GCD.');
    }

    CommDivisor = prodOfNum.reduce((total, number) => {
        return total *= number;
    });
    alert(`GCD of numbers ${firstNum} and ${secondNum} is ${CommDivisor}`);
}



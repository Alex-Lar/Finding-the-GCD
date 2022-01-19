'use strict';
let inputBtn = document.querySelector('#input-btn'),
    outputBtn = document.querySelector('#output-btn'),
    firstMultipliers = [],
    secondMultipliers = [],
    factIteration = 1;


inputBtn.addEventListener('click', function () {

    let firstNum = 4;
    let secondNum = 8;

    factorize(firstNum);
    factorize(secondNum);

    console.log(firstMultipliers);
    console.log(secondMultipliers);
    factIteration = 1;
});



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

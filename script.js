'use strict';

let inputBtn = document.querySelector('#input-btn');


inputBtn.addEventListener('click', function () {
    const array = [],
          dublicOfArr = [];
    let iterator = 3;

    for (let i = 0; i < iterator; i++) {
        let userAnswer = parseInt(prompt(`Введите ${i + 1} число`, ''));
        array.push(userAnswer);
        dublicOfArr.push(userAnswer);
    }

    let furstNum = array.shift(),
        secNum = array.shift();

    function findGCD(numOne, numTwo) {
        let remainder; 
        while (remainder !== 0) {
            if (numOne >= numTwo) {
                if (numOne % numTwo === 0) {
                    if (array.length === 0) {
                        return alert(`НОД(${dublicOfArr}) = ${numTwo}`);
                    } 
                    else if (array.length !== 0) {
                        numOne = array.shift();
                    }
                } 
                else if (numOne % numTwo !== 0) {
                    remainder = numOne % numTwo;
                    numOne = numTwo;
                    numTwo = remainder;

                }
            } 
            else if (numOne < numTwo) {
                if (numTwo % numOne === 0) {
                    if (array.length === 0) {
                        return alert(`НОД(${dublicOfArr}) = ${numOne}`);
                    } 
                    else if (array.length !== 0) {
                        numTwo = array.shift();
                    }
                } 
                else if (numTwo % numOne !== 0) {
                    remainder = numTwo % numOne;
                    numTwo = numOne;
                    numOne = remainder;
                }
            }
        }
    }
    findGCD(furstNum, secNum);
    
});
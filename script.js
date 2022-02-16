'use strict';

let inputBtn = document.querySelector('#input_btn');

inputBtn.addEventListener('click', function () {
    const array = [];
    const dublicOfArr = [];
    const radioValue = document.querySelector('input[name="nums"]:checked').value;
    let iterator = 0;
    
    if(radioValue === "2") {
        iterator = 2;
    } else if (radioValue === "3") {
        iterator = 3;
    } else if (radioValue === "4") {
        iterator = 4;
    }

    for (let i = 0; i < iterator; i++) {
        let userAnswer = parseInt(prompt(`Enter the ${i + 1}${declensions(i + 1)} number`, ''));
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
                        return alert(`G.C.D.(${dublicOfArr}) = ${numTwo}`);
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
                        return alert(`G.C.D.(${dublicOfArr}) = ${numOne}`);
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


    function declensions(el) {
        switch (el) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            case 4:
                return 'th';    
        }
    }
});
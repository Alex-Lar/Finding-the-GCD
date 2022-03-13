let inputBtn = document.querySelector('#input_btn');

inputBtn.addEventListener('click', function () {
    const numberOfRequests = parseInt(document.querySelector('input[name="nums"]:checked').value);

    const numsForExpression = getValuesFromUser(numberOfRequests);
    const dublicOfNums = numsForExpression.slice(0);
    const commonDivisor = calcGCD(numsForExpression);
    
    displayOutput(commonDivisor, dublicOfNums);
});


function getValuesFromUser(num) {
    const array = [];

    for (let i = 0; i < num; i++) {
        let userAnswer = parseInt(prompt(`Enter the ${i + 1}${getDeclension(i + 1)} number`, ''));
        array.push(userAnswer);
    }

    return array;
}

function calcGCD(array) {
    let remainder;
    let numA = array.shift();
    let numB = array.shift();

    while (remainder !== 0) {
        if (numA >= numB) {
            if (numA % numB === 0) {
                if (array.length === 0) {
                    return numB;
                } else if (array.length !== 0) {
                    numA = array.shift();
                }
            } else if (numA % numB !== 0) {
                remainder = numA % numB;
                numA = numB;
                numB = remainder;
            }
        } else if (numA < numB) {
            if (numB % numA === 0) {
                if (array.length === 0) {
                    return numA;
                } else if (array.length !== 0) {
                    numB = array.shift();
                }
            } else if (numB % numA !== 0) {
                remainder = numB % numA;
                numB = numA;
                numA = remainder;
            }
        }
    }
}


function displayOutput(divisor, array) {
    return alert(`G.C.D.(${array}) = ${divisor}`);
}


function getDeclension(num) {
    switch (num) {
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

// Doing sum from 1 to 15 by using recursion function.

function sum(i) {

    if (i === 1) {
        return 1;
    }

    return i + sum(i - 1);
}

//Caling the function

const result = sum(6);

console.log(result);
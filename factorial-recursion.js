// Find the factotrial of 5 by using recusive function.

function factotrial(i) {
    if (i === 1) {
        return 1;
    }

    return i * factotrial(i - 1);
}

// Calling the function 

const result = factotrial(5);
console.log(result);
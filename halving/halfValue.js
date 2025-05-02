//The function halfValue takes an array of numbers. It should return a new array with all the original values halved.

//Odd numbers should be rounded up to the nearest whole number.
// Sample input array
const numbers = [4, 7, 10, 15, 3, 8];

function halfValue(numbers) {
    const halved = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            halved.push(numbers[i] / 2);
        } else {
            halved.push(Math.ceil(numbers[i] / 2));
        }
    }

    return halved;
}

// Call the function and log the result
console.log(halfValue(numbers)); // Output: [2, 4, 5, 8, 2, 4]

/*
    CIT 281 Project 1
    Name: Lorena Garcia 
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const min = 0;
const max = 10; 
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const randomNumber = getRandomInteger(min, max);
console.log(randomNumber);


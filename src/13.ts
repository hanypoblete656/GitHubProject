// Function to generate a random number between 1 and 10
function getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
}

// Function to get a random item from an array of strings
function getRandomItem<T>(items: T[]): T | undefined {
    if (items.length === 0) {
        return undefined;
    } else {
        return items[getRandomNumber()];
    }
}

// Function to get a random item from an array of numbers
function getRandomItem<T>(items: T[]): T | undefined {
    if (items.length === 0) {
        return undefined;
    } else {
        return items[getRandomNumber()];
    }
}

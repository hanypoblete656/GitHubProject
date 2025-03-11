function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

let randomNumber = getRandomNumber(10);
console.log(randomNumber);

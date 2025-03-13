
const getRandomTsCode = () => {
  // Generate a random number between 1 and 50
  const randomNumber = Math.floor(Math.random() * 50) + 1;

  // Use the random number to generate a string of code
  const code = `
    const getRandomNumber = () => {
      return ${randomNumber};
    };
  `;

  return code;
};

const randomCode = getRandomTsCode();
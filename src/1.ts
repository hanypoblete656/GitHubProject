import { getRandomInt } from 'crypto';

const getRandomNumber = () => {
  const min = 1;
  const max = 10;
  return getRandomInt(min, max);
}

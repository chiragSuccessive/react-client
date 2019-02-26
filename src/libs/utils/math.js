const getRandomNumber = (number) => {
  const value = Math.random() * (number - 1);
  return Math.round(value);
};
const getNextRoundRobin = (total, current) => {
  if (current === (total - 1)) {
    return 0;
  }
  return (current + 1);
};
export { getNextRoundRobin, getRandomNumber };

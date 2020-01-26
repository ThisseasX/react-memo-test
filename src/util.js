export const getRandomColor = () =>
  '#' +
  Math.floor(Math.random() * Math.pow(255, 3))
    .toString(16)
    .padEnd(6, 'f');

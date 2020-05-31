export const getNumbers = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    value: Math.random() * 100,
  }));
};

export const getNumber = (input) => {
  const numbers = getNumbers();
  return numbers.find((v) => String(v.id) === input.id);
};

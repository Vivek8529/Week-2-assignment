const add = (a, b) => {
  return a + b;
};

const Highorder = (a, referenceFunction) => {
  return referenceFunction(a, 20);
};

console.log(Highorder(10, add));

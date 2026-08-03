function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

console.log(rollDice(6));   // dado de 6 caras
console.log(rollDice(20));  // dado de 20 caras
console.log(rollDice(100)); // dado de 100 caras

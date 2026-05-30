const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list, word) {
  let count = 0;

  for (let item of list) {
    if (item === word) {
      count++;
    }
  }

  return count;
}

console.log(repeatCounter(counterWords, 'code'));
console.log(repeatCounter(counterWords, 'sleep'));
console.log(repeatCounter(counterWords, 'repeat'));
console.log(repeatCounter(counterWords, 'Diego'));
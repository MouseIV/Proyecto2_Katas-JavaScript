const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
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

console.log(repeatCounter(words, 'code'));
console.log(repeatCounter(words, 'sleep'));
console.log(repeatCounter(words, 'repeat'));
console.log(repeatCounter(words, 'game'));
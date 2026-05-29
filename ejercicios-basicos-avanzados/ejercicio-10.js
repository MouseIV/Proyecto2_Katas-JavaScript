const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let sum = 0;

  for (const num of numberList) {
    sum += num;
  }

  return sum / numberList.length;
}

console.log(average(numbers2));

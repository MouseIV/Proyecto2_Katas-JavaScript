const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc"
];

function finderName(list, name) {
  if (list.includes(name)) {
    return "Found " + name;
  } else {
    return "Not Found " + name;
  }
}

console.log(finderName(names, "Tony"));
console.log(finderName(names, "Diego"));
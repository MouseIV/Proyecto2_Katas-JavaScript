const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let total = 0;

  for (let element of list) {
    if (typeof element === "number") {
      total += element;
    } else {
      total += element.length;
    }
  }

  return total;
}

console.log("Longitudes reales:");
for (let element of mixedElements) {
  if (typeof element === "string") {
    console.log(element, "→", element.length);
  }
}

console.log("Resultado final:", averageWord(mixedElements));
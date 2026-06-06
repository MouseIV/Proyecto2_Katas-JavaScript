const products = [
  { name: "Funko Pop", sellCount: 10 },
  { name: "Mochila", sellCount: 5 },
  { name: "Camiseta", sellCount: 20 },
  { name: "Póster", sellCount: 15 }
];

function totalSellCount(list) {
  let total = 0;

  for (let product of list) {
    total += product.sellCount;
  }

  return total;
}

console.log(totalSellCount(products));

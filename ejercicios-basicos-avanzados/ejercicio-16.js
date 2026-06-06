const products = [
  { name: "Funko Pop", sellCount: 10 },
  { name: "Mochila", sellCount: 30 },
  { name: "Camiseta", sellCount: 3 },
  { name: "Póster", sellCount: 25 },
  { name: "Taza", sellCount: 7 }
];

function filterBestSelling(list) {
  const result = [];

  for (let product of list) {
    if (product.sellCount > 20) {
      result.push(product);
    }
  }

  return result;
}

console.log(filterBestSelling(products));

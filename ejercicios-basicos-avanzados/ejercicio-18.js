const products = {
  comics: [
    { name: "Spiderman", sellCount: 10 },
    { name: "Avengers", sellCount: 5 }
  ],
  games: [
    { name: "GTA V", sellCount: 20 },
    { name: "Zelda", sellCount: 15 }
  ]
};

function totalSellCountByCategory(obj) {
  let total = 0;

  for (let category in obj) {
    for (let product of obj[category]) {
      total += product.sellCount;
    }
  }

  return total;
}

console.log(totalSellCountByCategory(products));

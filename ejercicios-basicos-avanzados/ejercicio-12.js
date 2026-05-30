const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const cleanList = [];

  for (let item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }

  return cleanList;
}


console.log(removeDuplicates(duplicates));

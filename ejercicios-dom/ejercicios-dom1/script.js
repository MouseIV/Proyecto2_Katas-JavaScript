// 1.1 Botón con clase .showme
const button = document.querySelector(".showme");
console.log(button);

// 1.2 h1 con id #pillado
const h1 = document.querySelector("#pillado");
console.log(h1);

// 1.3 Todos los <p>
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// 1.4 Todos los elementos con clase .pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

// 1.5 Todos los elementos con data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

// 1.6 El tercer elemento con data-function="testMe"
console.log(testMeElements[2]);

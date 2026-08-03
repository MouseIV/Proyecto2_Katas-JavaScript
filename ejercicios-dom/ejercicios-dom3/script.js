// 3.1 Crear lista ul > li con los países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement("ul");

for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  ulCountries.appendChild(li);
}

document.body.appendChild(ulCountries);


// 3.2 Eliminar el elemento con clase .fn-remove-me
const removeMe = document.querySelector(".fn-remove-me");
removeMe.remove();


// 3.3 Crear lista ul > li dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
}

printDiv.appendChild(ulCars);


// 3.4 Crear divs con h4 + img dinámicamente
const countriesInfo = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement("div");

for (const item of countriesInfo) {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  container.appendChild(div);
}

document.body.appendChild(container);


// 3.5 Botón que elimina el último div de la serie
const btnDeleteLast = document.createElement("button");
btnDeleteLast.textContent = "Eliminar último div";
document.body.appendChild(btnDeleteLast);

btnDeleteLast.addEventListener("click", () => {
  const allDivs = container.querySelectorAll("div");
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove();
  }
});


// 3.6 Botón para eliminar cada div individualmente
const allDivs = container.querySelectorAll("div");

for (const div of allDivs) {
  const btn = document.createElement("button");
  btn.textContent = "Eliminar este div";

  btn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(btn);
}


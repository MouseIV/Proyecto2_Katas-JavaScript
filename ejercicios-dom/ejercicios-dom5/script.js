const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Seleccionamos el contenedor donde irá la lista
const container = document.querySelector("#albumsList");

// Creamos la lista
const ul = document.createElement("ul");

// Creamos los <li> dinámicamente
for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
}

// Insertamos la lista en el contenedor
container.appendChild(ul);

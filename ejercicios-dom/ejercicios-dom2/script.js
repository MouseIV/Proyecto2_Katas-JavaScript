// 2.1 Inserta un div vacío
const div1 = document.createElement("div");
document.body.appendChild(div1);

// 2.2 Inserta un div con una p dentro
const div2 = document.createElement("div");
const p2 = document.createElement("p");
p2.textContent = "Soy un párrafo dentro de un div";
div2.appendChild(p2);
document.body.appendChild(div2);

// 2.3 Inserta un div con 6 p usando un loop
const div3 = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = `Párrafo número ${i}`;
  div3.appendChild(p);
}
document.body.appendChild(div3);

// 2.4 Inserta una p con el texto "Soy dinámico!"
const p4 = document.createElement("p");
p4.textContent = "Soy dinámico!";
document.body.appendChild(p4);

// 2.5 Inserta en el h2 el texto "Wubba Lubba dub dub"
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Crea una lista ul > li con los textos del array
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos con la clase .fn-remove-me
const removeElements = document.querySelectorAll(".fn-remove-me");
for (const el of removeElements) {
  el.remove();
}

// 2.8 Inserta una p "Voy en medio!" entre los dos primeros div
const allDivs = document.querySelectorAll("div");
const p8 = document.createElement("p");
p8.textContent = "Voy en medio!";
document.body.insertBefore(p8, allDivs[1]);

// 2.9 Inserta una p "Voy dentro!" dentro de todos los div .fn-insert-here
const divsInsert = document.querySelectorAll(".fn-insert-here");
for (const div of divsInsert) {
  const p9 = document.createElement("p");
  p9.textContent = "Voy dentro!";
  div.appendChild(p9);
}

// 4.1 Evento click que muestra la información del evento
const btn = document.querySelector("#btnToClick");

btn.addEventListener("click", (event) => {
  console.log("Evento click:", event);
});


// 4.2 Evento focus que muestra el valor del input
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", () => {
  console.log("Valor del input (focus):", inputFocus.value);
});


// 4.3 Evento input que muestra el valor en tiempo real
const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", () => {
  console.log("Valor del input (input):", inputValue.value);
});

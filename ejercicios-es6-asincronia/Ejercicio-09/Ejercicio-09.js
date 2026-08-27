const img = document.querySelector(".random-image");
const btn = document.querySelector("#new-pokemon-btn");

// Función para obtener un número aleatorio entre 1 y 151
const getRandomPokemonId = () => Math.floor(Math.random() * 151) + 1;

const loadRandomPokemon = async () => {
  try {
    const randomId = getRandomPokemonId();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await response.json();

    const imageUrl = pokemon.sprites.other["official-artwork"].front_default;

    img.src = imageUrl;
    img.alt = pokemon.name;

    console.log(`Mostrando: ${pokemon.name} (#${randomId})`);
  } catch (error) {
    console.error("Error al cargar el Pokémon:", error);
  }
};

// Cargar uno al entrar
loadRandomPokemon();

// Cargar otro al pulsar el botón
btn.addEventListener("click", loadRandomPokemon);

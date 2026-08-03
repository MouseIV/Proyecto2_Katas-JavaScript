const select = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

const loadCharacters = async () => {
  try {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const characters = await response.json();

    // Rellenar el select con los nombres
    characters.forEach(character => {
      const option = document.createElement("option");
      option.value = character.id;
      option.textContent = character.fullName;
      select.appendChild(option);
    });

    // Evento para cambiar la imagen al seleccionar un personaje
    select.addEventListener("change", () => {
      const selectedId = Number(select.value);
      const selectedCharacter = characters.find(c => c.id === selectedId);

      img.src = selectedCharacter.imageUrl;
    });

  } catch (error) {
    console.error("Error cargando personajes:", error);
  }
};

loadCharacters();

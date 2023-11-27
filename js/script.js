  document.addEventListener("DOMContentLoaded", function () {
    const pokemonSelect = document.getElementById("pokemon-select");
    const getPokemonButton = document.getElementById("get-pokemon");
  
    getPokemonButton.addEventListener("click", function () {
      const selectedPokemon = pokemonSelect.value;
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          displayPokemonInfo(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    });
  
    function displayPokemonInfo(pokemonData) {
      const pokemonContainer = document.querySelector(".container");
      pokemonContainer.innerHTML = ""; 
  
      const pokemonName = document.createElement("h2");
      pokemonName.textContent = pokemonData.name;
  
      const pokemonImage = document.createElement("img");
      pokemonImage.src = pokemonData.sprites.front_default;
      pokemonImage.alt = `Imagen de ${pokemonData.name}`;
  
      const pokemonType = document.createElement("p");
      pokemonType.textContent = `Tipo: ${pokemonData.types[0].type.name}`;
  
      const pokemonHeight = document.createElement("p");
      pokemonHeight.textContent = `Altura: ${pokemonData.height * 0.1} m`;
  
      const pokemonWeight = document.createElement("p");
      pokemonWeight.textContent = `Peso: ${pokemonData.weight * 0.1} kg`;
  
      pokemonContainer.appendChild(pokemonName);
      pokemonContainer.appendChild(pokemonImage);
      pokemonContainer.appendChild(pokemonType);
      pokemonContainer.appendChild(pokemonHeight);
      pokemonContainer.appendChild(pokemonWeight);
    }
  });
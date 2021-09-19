document.querySelector('#btnLoad').addEventListener('click', () => {
  // remove name before generating the next one and for this we also added dinoNameDiv.id down below
  if (document.querySelector('#pokemonName') !== null) {
    document.querySelector('#pokemonName').remove();
  }
  // remove image before generating the next one and for this we also added img.id down below
  if (document.querySelector('#pokemonImage') !== null) {
    document.querySelector('#pokemonImage').remove();
  }
  getPokemon();
});

// generating pokemon
async function getPokemon() {
  const response = await fetch('/pokemon');
  const data = await response.json();
  // get all pokemons' data
  let pokemonsData = data.results.map((result, index) => ({
    ...result,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));

  // get random pokemon's data
  let pokemon = pokemonsData[Math.floor(Math.random() * pokemonsData.length)];

  generatePokemonName(pokemon);
  generatePokemonImage(pokemon);
}

function generatePokemonName(pokemon) {
  let name = document.createElement('h3');
  name.id = 'pokemonName';
  name.textContent = pokemon.name;
  document.querySelector('#pokemonWrapper').appendChild(name);
}

function generatePokemonImage(pokemon) {
  let img = document.createElement('img');
  img.id = 'pokemonImage';
  img.src = pokemon.image;
  document.querySelector('#pokemonWrapper').appendChild(img);
}

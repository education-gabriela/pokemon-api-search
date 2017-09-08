document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("pokemon-seach-input");
  const form = document.querySelector("form");
  const pokemonContainer = document.getElementById("pokemon-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let adapter = new ApiAdapter();
    let api = new PokemonApi(adapter);
    const lister = new PokemonLister([], pokemonContainer);
    lister.render();

    let result = api.fetchPokemonByName(searchInput.value, pokemon => {
      lister.addPokemon(pokemon);
    });

  });
  pokemonContainer.addEventListener("click", function (event) {
    const pokemonName = event.target.dataset.pokename;
    if (pokemonName) {
      const pokemon = Pokemon.findByName(pokemonName);
      const pokemonRenderer = new PokemonRenderer(pokemon);
      const pokemonImage = event.target.parentNode.querySelector("img");
      pokemonRenderer.flip(pokemonImage);
    }
  });
});

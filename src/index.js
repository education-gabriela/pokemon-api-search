document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("pokemon-seach-input");
  const pokemonContainer = document.getElementById("pokemon-container");

  searchInput.addEventListener("keyup", function (event) {
    const searchResult = Pokemon.search(this.value);
    const lister = new PokemonLister(searchResult, pokemonContainer);
    lister.render();
  });

  pokemonContainer.addEventListener("click", function (event) {
    const pokemonName = event.target.dataset.pokename
    if (pokemonName) {
      const pokemon = Pokemon.findByName(pokemonName);
      const pokemonRenderer = new PokemonRenderer(pokemon);
      const pokemonImage = event.target.parentNode.querySelector("img");
      pokemonRenderer.flip(pokemonImage);
    }
  });
});

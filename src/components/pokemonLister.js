class PokemonLister {
  constructor (pokemons, target) {
    this.pokemons = pokemons;
    this.target = target;
    this.target.innerHTML = "";
    this.list = document.createElement("div");
    this.list.setAttribute("id", "pokemon-list");
  }

  render () {
    this.pokemons.forEach(pokemon => {
      const pokemonBuilder = new PokemonRenderer(pokemon);
      this.list.appendChild(pokemonBuilder.build());
    });
    this.target.appendChild(this.list);
  }
}

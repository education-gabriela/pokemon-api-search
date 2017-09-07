class PokemonApi {
  constructor (adapter) {
    this.adapter = adapter;
  }

  fetchPokemon (id, uri = `/pokemon/${id}`, callback) {
    this.adapter.sendRequest(uri, function(event) {
      this.generatePokemon.call(this, event, callback);
    }.bind(this));
  }

  generatePokemon (event, callback) {
    const pokemonData = Storage.jsonDecode(event.target.responseText);
    const pokemon = Pokemon.create(pokemonData);
    if (callback) {
      callback(pokemon);
    }
    return pokemon;
  }

  fetchPokemonByName (name, next = "/pokemon") {
    this.adapter.sendRequest(next, function (event) {
      this.findPokemonByName.call(this, event, name);
    }.bind(this));
  }

  findPokemonByName (event, name) {
    const result = Storage.jsonDecode(event.target.responseText);
    const pokemons = result.results;
    const findResult = pokemons.find(pokemon => {
      return pokemon.name === name;
    });

    if (findResult) {
      this.fetchPokemon(null, findResult.url, function(pokemon) {
        console.log(pokemon)
      });
    }
  }
}

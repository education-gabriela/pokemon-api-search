class PokemonApi {
  constructor (adapter) {
    this.adapter = adapter;
  }

  fetchPokemon (id, uri = `/pokemon/${id}`, callback) {
    this.adapter.sendRequest(uri, function (event) {
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

  fetchPokemonByName (name, callback, next = "/pokemon") {
    if (!next) {
      return;
    }

    this.adapter.sendRequest(next, function (event) {
      this.findPokemonByName.call(this, event, name, callback);
    }.bind(this));
  }

  findPokemonByName (event, name, callback) {
    const result = Storage.jsonDecode(event.target.responseText);
    const pokemonsResult = result.results;
    const findResult = pokemonsResult.filter(pokemon => {
      return pokemon.name === name;
    });

    if (findResult.length != 0) {
      return findResult.map(pokemon => {
        this.fetchPokemon(null, pokemon.url, function (pokemon) {
          callback(pokemon);
        });
      });
    } else {
      this.fetchPokemonByName(name, callback, result.next);
    }
  }
}

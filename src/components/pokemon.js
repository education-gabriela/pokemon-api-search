class Pokemon {
  constructor (name, images) {
    this.name = name;
    this.images = images;
  }

  static all () {
    return POKEMONS;
  }

  static create (object) {
    const pokemon = new Pokemon(object.name, {front: object.sprites.front_default, back: object.sprites.back_default});
    pokemon.id = object.id;
    return pokemon;
  }

  static search (term) {
    if (term.length === 0) {
      return [];
    }
    const result = this.all().filter(p => p["name"].match(new RegExp(term)));
    return result.map(pokemon => new Pokemon(pokemon["name"], pokemon["sprites"]));
  }

  static findByName (name) {
    const result = this.all().find(pokemon => pokemon["name"] === name);
    return new Pokemon(result["name"], result["sprites"]);
  }
}

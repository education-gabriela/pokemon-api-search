class PokemonRenderer {
  constructor (pokemon) {
    this.pokemon = pokemon;
  }

  build () {
    const div = document.createElement("div");
    div.classList.add("pokemon-container");
    div.appendChild(this.buildHeader());
    div.appendChild(this.buildImage());
    div.appendChild(this.buildFlipCard());
    return div;
  }

  buildHeader () {
    const h1 = document.createElement("h1");
    h1.innerText = this.pokemon.name;
    return h1;
  }

  buildImage () {
    const img = document.createElement("img");
    this.flip(img);
    return img;
  }

  buildFlipCard () {
    const p = document.createElement("p");
    p.innerText = "flip card";
    p.dataset.pokename = this.pokemon.name;
    return p;
  }

  flip (imageTarget) {
    let sprite = "front";
    if(imageTarget.dataset.sprite === "front") {
      sprite = "back";
    }
    imageTarget.src = this.pokemon.images[sprite];
    imageTarget.dataset.sprite = sprite;
  }
}

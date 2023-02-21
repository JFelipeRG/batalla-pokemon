class Pokemon {
  constructor(name, type) {
    this.name = name;

    this.type = type;

    this.hp = 10;

    this.level = 1;
  }

  attack(pokemon, lessDamage) {
    pokemon.hp -= !lessDamage ? 10 : 5;

    if (pokemon.hp <= 0) {
      pokemon.die();
    }

    console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name} de tipo ${pokemon.type} y le queda de vida ${pokemon.hp}`);
  }

  die() {
    console.log(`El pokemon ${this.name} ha muerto, vete llorando al centro pokemon loser :)`);
  }
}

class PokemonFuego extends Pokemon {
  constructor(name) {
    super(name, "Fuego");
  }

  attack(pokemon) {
    if (pokemon.type === "Planta") {
      super.attack(pokemon);

      super.attack(pokemon);
    } else if (pokemon.type === this.type) {
      super.attack(pokemon, true);
    } else {
      super.attack(pokemon);
    }
  }
}

class PokemonAgua extends Pokemon {
  constructor(nombre) {
    super(nombre, "Agua");
  }

  attack(pokemon) {
    if (pokemon.type === "Fuego") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else if (pokemon.type === this.type) {
      super.attack(pokemon, true);
    } else {
      super.attack(pokemon);
    }
  }
}

class PokemonPlanta extends Pokemon {
  constructor(nombre) {
    super(nombre, "Planta");
  }

  attack(pokemon) {
    if (pokemon.type === "Electrico") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else if (pokemon.type === this.type) {
      super.attack(pokemon, true);
    } else {
      super.attack(pokemon);
    }
  }
}

class PokemonElectrico extends Pokemon {
  constructor(nombre) {
    super(nombre, "Electrico");
  }

  attack(pokemon) {
    if (pokemon.type === "Planta") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else if (pokemon.type === this.type) {
      super.attack(pokemon, true);
    } else {
      super.attack(pokemon);
    }
  }
}

const charizard = new PokemonFuego("Charizard");

const squirtle = new PokemonAgua("Squirtle");

const bulbasaur = new PokemonPlanta("Bulbasaur");

const pikachu = new PokemonElectrico("Pikachu");

squirtle.attack(charizard); // ??

charizard.attack(squirtle); // ??

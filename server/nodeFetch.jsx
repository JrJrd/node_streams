const fetch = require("isomorphic-fetch");
const fs = require("fs");

async function fetchPokem() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  );

  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const WriteStream = fs.createWriteStream("./pokemon.json");
  WriteStream.write(buffer);
}

fetchPokem();

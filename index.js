if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
// creating an express app
const app = express();
// setting up a port
const port = 3000;
const fetch = require('node-fetch');

app.use(express.static('public'));

// tell the server to listen for any requests made at the port which is 3000
// and if the browser will make request to load this local website using port 300,
// then it will serve the website
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// create the route which will load pokemons
app.get('/pokemon', async (request, response) => {
  // getting the API data
  const fetchApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');

  const pokemonResponse = await fetchApi.json();
  response.json(pokemonResponse);
});

document.addEventListener("DOMContentLoaded", function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const evolutionName = urlParams.get('evolucao');
  
    if (evolutionName) {
      document.title = `Página do Pokémon ${evolutionName}`; // Atualizando o título da página
      document.getElementById('pokemon-name').textContent = evolutionName; // Atualizando o nome da evolução no header
  
      // Fazendo a requisição para a PokeAPI
      fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionName}`)
        .then(response => response.json())
        .then(data => {
          const pokemonImg = document.createElement('img');
          pokemonImg.src = data.sprites.front_default;
          pokemonImg.alt = `${evolutionName} image`; // Definindo o atributo alt
          document.getElementById('pokemon-info').appendChild(pokemonImg); // Adicionando a imagem ao corpo da página
        })
        .catch(error => console.error('Erro ao carregar imagem do Pokémon:', error));
    }
  });
  
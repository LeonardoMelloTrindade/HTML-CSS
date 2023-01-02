var nomePokemon = document.getElementById("formGroupExampleInput").value;
var tipoPokemon = document.getElementById("selectTipo");
var imagemPokemon = document.getElementById("formGroupExampleInput3").value;

getPokemonsSalvos();
function getPokemonsSalvos() {
    fetch('http://localhost:3000/meuspokemons')
        .then(function (response) {
            return response.json();
        })
        .then(function (pokemons) {
            for (let index in pokemons) {
                addPokemon(pokemons[index].nome, pokemons[index].tipo, pokemons[index].pokedex);
                console.log(pokemons[index])
            }
        });
}

function iniciar() {
    for (let index in pokemons) {
        addPokemon(pokemon[index].nome, pokemon[index].tipo, pokemon[index].pokedex);
    }
}


function addPokemon(nome, tipo, pokedex) {
    var add = document.getElementById("table-data");
    add.innerHTML += `<tr class="removerPokemon"> 
        <td>${nome}</td> <td> <span class="${tipo} posicao-margin">${tipo}</span></td> 
        <td><img class="img-fluid" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedex}.png"></td> 
        <td><button name="botao" type="button" onclick="removerPokemon('${nome}')" class="btn btn-danger">X</button></td>
        </tr>`;
}

const esvaziarContainer = function () {
    document.getElementById("formGroupExampleInput").value = '';
    document.getElementById("selectTipo");
    document.getElementById("formGroupExampleInput3").value = '';
}

var form = document.querySelector("form");
form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    nomePokemon = document.getElementById("formGroupExampleInput").value;
    pokedexPokemon = document.getElementById("formGroupExampleInput3").value;
    textPokemon = tipoPokemon.options[tipoPokemon.selectedIndex].value;

    pokemon = {
        nome: nomePokemon,
        tipo: textPokemon,
        pokedex: pokedexPokemon
    }

    fetch('http://localhost:3000/meuspokemons', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    //body: JSON.stringify({a: 1, b: 'Textual content'})
    body: JSON.stringify(pokemon)
  }).then(function(pokemonn){
        console.log(pokemonn)
    })

    addPokemon(nomePokemon, textPokemon, pokedexPokemon);
    esvaziarContainer();
})

function limpar() {
    var table = document.getElementById("table-data");
    table.innerHTML = '';
}

function removerPokemon(nome) {
    limpar();
    pokemon = pokemon.filter(item => item.nome !== nome);
    iniciar();
}
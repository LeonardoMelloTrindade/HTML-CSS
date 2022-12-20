var nomePokemon = document.getElementById("formGroupExampleInput").value;
var tipoPokemon = document.getElementById("selectTipo");
var imagemPokemon = document.getElementById("formGroupExampleInput3").value;

var pokemons = [
    {
        nome: 'Pikachu',
        tipo: 'electric',
        pokedex: '25'
    },
    {
        nome: 'Squirtle',
        tipo: 'water',
        pokedex: '7'
    },
    {
        nome: 'Bulbasaur',
        tipo: 'grass',
        pokedex: '1'
    },
    {
        nome: 'Charmander',
        tipo: 'fire',
        pokedex: '4'
    },
    {
        nome: 'Meowth',
        tipo: 'normal',
        pokedex: '52'
        },
    {
        nome: 'Rattata',
        tipo: 'normal',
        pokedex: '19'
    },
    {
        nome: 'Jigglypuff',
        tipo: 'fairy',
        pokedex: '39'
    }
]


function iniciar() {
    for (let index in pokemons) {
        addPokemon(pokemons[index].nome, pokemons[index].tipo, pokemons[index].pokedex);
    }
}
iniciar();

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
    selectPokemon = document.getElementById("selectTipo");
    textPokemon = selectPokemon.options[selectPokemon.selectedIndex].text
    pokedexPokemon = document.getElementById("formGroupExampleInput3").value;

    pokemons.push({
        nome: nomePokemon,
        tipo: textPokemon,
        pokedex: pokedexPokemon
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
    pokemons = pokemons.filter(item => item.nome !== nome);
    iniciar();
}
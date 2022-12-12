var nomePokemon =  document.getElementById("formGroupExampleInput").value;
var tipoPokemon =  document.getElementById("formGroupExampleInput2").value;
var imagemPokemon = document.getElementById("formGroupExampleInput3").value;

var pokemons = [
    {
        nome: 'Pikachu',
        tipo: 'Elétrico',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    },
    {
        nome: 'Squirtle',
        tipo: 'Água',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    }
]
for(let index in pokemons) {
    addPokemon(pokemons[index].nome, pokemons[index].tipo, pokemons[index].imagem);
}

function addPokemon(nome, tipo, imagem) {
    document.getElementById("table-data").innerHTML += "<tr> <td>"+ nome + "</td> <td>"+ tipo +"</td> <td><img class='img-fluid' src=" + imagem + "></td> </tr>";
}

const esvaziarContainer = function() {
    document.getElementById("formGroupExampleInput").value = '';
    document.getElementById("formGroupExampleInput2").value = '';
    document.getElementById("formGroupExampleInput3").value = '';
}

var form = document.querySelector("form");
form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    nomePokemon =  document.getElementById("formGroupExampleInput").value;
    tipoPokemon =  document.getElementById("formGroupExampleInput2").value;
    imagemPokemon = document.getElementById("formGroupExampleInput3").value;

     pokemons.push({
        nome: nomePokemon,
        tipo: tipoPokemon,
        imagem: imagemPokemon
    })

    addPokemon(nomePokemon, tipoPokemon, imagemPokemon);
    esvaziarContainer();
})
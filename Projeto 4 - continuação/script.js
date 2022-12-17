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
    },
    {
        nome: 'Bulbasaur',
        tipo: 'Planta',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
        nome: 'Charmander',
        tipo: 'Fogo',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
    },
    {
        nome: 'Meowth',
        tipo: 'Normal',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
    },
    {
        nome: 'Rattata',
        tipo: 'Normal',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
    },
    {
        nome: 'Jigglypuff',
        tipo: 'Fada',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
    }
]
var arrayTipos = [];

for(let index in pokemons) {
    addPokemon(pokemons[index].nome, pokemons[index].tipo, pokemons[index].imagem);
}

function addPokemon(nome, tipo, imagem) {
    var add = document.getElementById("table-data");
    switch(tipo) {
        case 'Elétrico':
            arrayTipos.push({tipo: tipo, cor: 'yellow'});
            console.log(arrayTipos);
            add.innerHTML += "<tr class='removerPokemon'> <td>" + nome + "</td> <td> <span class='electric posicao-margin'>" + tipo + "</span></td> <td><img class='img-fluid' src=" + imagem + "></td> <td><button name='botao' type='button' class='btn btn-danger'>X</button></td></tr>";
            break;
        case 'Fogo':
            arrayTipos.push({tipo: tipo, cor: 'red'});
            console.log(arrayTipos);
            add.innerHTML += "<tr class='removerPokemon'> <td> "+ nome + "</td> <td> <span class='fire posicao-margin'>" + tipo + "</span></td> <td><img class='img-fluid' src=" + imagem + "></td> <td><button name='botao' type='button' class='btn btn-danger'>X</button></td></tr>";
            break;
        case 'Planta':
            arrayTipos.push({tipo: tipo, cor: 'green'});
            console.log(arrayTipos);
            add.innerHTML += "<tr class='removerPokemon'> <td>" + nome + "</td> <td> <span class='grass posicao-margin'>" + tipo + "</span></td> <td><img class='img-fluid' src=" + imagem + "></td> <td><button name='botao' type='button' class='btn btn-danger'>X</button></td></tr>";
            break;
        case 'Água':
            arrayTipos.push({tipo: tipo, cor: 'blue'});
            console.log(arrayTipos);
            add.innerHTML += "<tr class='removerPokemon'> <td>" + nome + "</td> <td> <span class='water posicao-margin'>" + tipo + "</span></td> <td><img class='img-fluid' src=" + imagem + "></td> <td><button name='botao' type='button' class='btn btn-danger'>X</button></td></tr>";
            break;
        case 'Fada':
            arrayTipos.push({tipo: tipo, cor: 'pink'});
            console.log(arrayTipos);
            add.innerHTML += "<tr class='removerPokemon'> <td>" + nome + "</td> <td> <span class='fairy posicao-margin'>" + tipo + "</span></td> <td><img class='img-fluid' src=" + imagem + "></td> <td><button name='botao' type='button' class='btn btn-danger'>X</button></td></tr>";
            break;
        default:
            arrayTipos.push({tipo: tipo, cor: 'beige'});
            console.log(arrayTipos);
            add.innerHTML += "<tr class='removerPokemon'> <td>" + nome + "</td> <td> <span class='normal posicao-margin'>" + tipo + "</span></td> <td><img class='img-fluid' src=" + imagem + "></td> <td><button name='botao' type='button' class='btn btn-danger'>X</button></td></tr>";
    }
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

var tabela = document.getElementById("table-data");
tabela.addEventListener('click', (e) => {
    let numClass = e.target.parentNode.parentNode.sectionRowIndex;
    console.log(numClass);
    if(numClass !== undefined) {
        let excluirPokemon = document.getElementsByClassName("removerPokemon")[numClass];
        pokemons.splice(numClass, 1);
        arrayTipos.splice(numClass, 1);
        console.log(pokemons);
        excluirPokemon.remove();
    } 
})

/*
function excluirPokemon(index) {
    let excluirPokemon = document.getElementsByClassName("removerPokemon")[index];
    pokemons.splice(index, 1);
    arrayTipos.splice(index, 1);
    console.log(pokemons);
    excluirPokemon.remove();
}
*/
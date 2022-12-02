pokemon1 = {
    pokedex: 025,
    nome: 'Pikachu',
    tipo: 'Elétrico',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
}

pokemon2 = {
    pokedex: 1,
    nome: 'Bulbasaur',
    tipo: 'Planta',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
}

pokemon3 = {
    pokedex: 4,
    nome: 'Charmander',
    tipo: 'Fogo',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
}

pokemon4 = {
    pokedex: 52,
    nome: 'Meowth',
    tipo: 'Normal',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
}

pokemon5 = {
    pokedex: 19,
    nome: 'Rattata',
    tipo: 'Normal',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
}

pokemon6 = {
    pokedex: 39,
    nome: 'Jigglypuff',
    tipo: 'Normal',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
}

const listaPokemon = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];

for (let i = 0; i < listaPokemon.length; i++) {
    document.getElementById("fds").innerHTML += '<div id="pokemons"><h2>N°' + listaPokemon[i].pokedex + '</h3><img src="' + listaPokemon[i].imagem + '"><h3>' + listaPokemon[i].nome + '</h3><h4>' + listaPokemon[i].tipo + '</h4></div>';
}

function exibirFiltro() {
    for(let index in listaPokemon){
    switch(listaPokemon.tipo) {
        case 'Elétrico':
            console.log('chego eletrico')
            document.getElementById("fds").innerHTML = '<div id="pokemons"><h2>N°' + listaPokemon[index].pokedex + '</h3><img src="' + listaPokemon[index].imagem + '"><h3>' + listaPokemon[index].nome + '</h3><h4>' + listaPokemon[index].tipo + '</h4></div>';
            break;
        case 'Planta':
            console.log('chego planta')
            document.getElementById("fds").innerHTML = '<div id="pokemons"><h2>N°' + listaPokemon[1].pokedex + '</h3><img src="' + listaPokemon[1].imagem + '"><h3>' + listaPokemon[1].nome + '</h3><h4>' + listaPokemon[1].tipo + '</h4></div>';
            break;
        case 'Fogo':
            console.log('chego fogo')
            document.getElementById("fds").innerHTML = '<div id="pokemons"><h2>N°' + listaPokemon[2].pokedex + '</h3><img src="' + listaPokemon[2].imagem + '"><h3>' + listaPokemon[2].nome + '</h3><h4>' + listaPokemon[2].tipo + '</h4></div>';
            break;
        default:
            console.log('erro');
            document.getElementById("fds").innerHTML = '';
        }
    }
}
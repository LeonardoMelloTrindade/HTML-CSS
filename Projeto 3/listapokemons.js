function getPokemons() {
    return [
        {
            pokedex: '025',
            nome: 'Pikachu',
            tipo: 'Elétrico',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
        },
        {
            pokedex: '007',
            nome: 'Squirtle',
            tipo: 'Água',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
        },
        {
            pokedex: '001',
            nome: 'Bulbasaur',
            tipo: 'Planta',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        },
        {
            pokedex: '004',
            nome: 'Charmander',
            tipo: 'Fogo',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
        },
        {
            pokedex: '052',
            nome: 'Meowth',
            tipo: 'Normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
        },
        {
            pokedex: '019',
            nome: 'Rattata',
            tipo: 'Normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
        },
        {
            pokedex: '039',
            nome: 'Jigglypuff',
            tipo: 'Fada',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
        }
    ]
}

var listaPokemons = getPokemons();
var cardTemplate = document.getElementById("cardTemplate");
var container = document.getElementById("container");
var select = document.getElementById("tipo-pokemon");

function AllPokemons() {
    vazio();
    for(var index in listaPokemons) {
        var pokemon = listaPokemons[index];
        var card = cardTemplate.content.cloneNode(true).getElementById('card').innerHTML;
        card = card.replace(/{{nome}}/g, pokemon.nome);
        card = card.replace(/{{imagem}}/g, `<img src="${pokemon.imagem}"/>`);
        card = card.replace(/{{tipo}}/g, pokemon.tipo);
        card = card.replace(/{{pokedex}}/g, pokemon.pokedex);
        container.innerHTML += card;
    }
}

function vazio() {
    document.getElementById("container").innerHTML = '';
}

function criandoPokemon(tipoPokemon) {
    vazio();
    for(let index in listaPokemons) {
        if (tipoPokemon === listaPokemons[index].tipo) {
            var pokemon = listaPokemons[index];
            var card = cardTemplate.content.cloneNode(true).getElementById('card').innerHTML;
            card = card.replace(/{{nome}}/g, pokemon.nome);
            card = card.replace(/{{imagem}}/g, `<img src="${pokemon.imagem}"/>`);
            card = card.replace(/{{tipo}}/g, pokemon.tipo);
            card = card.replace(/{{pokedex}}/g, pokemon.pokedex);
            container.innerHTML += card;
        }
    }
}
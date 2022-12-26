var express = require("express");
var cors = require('cors');
var app = express();
console.log('teste');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get("/", (req, res, next) => {
    res.send("Olá essa é a rota inicial");
});

app.get("/meuspokemons", (req, res, next) => {
    res.json([
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
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


// C:\Users\leo11\Desktop\Cursos\Projeto-Estágio\backend-api\api
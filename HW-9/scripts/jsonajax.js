$(document).ready(function () {
           $("button").click(function () {
               $("#pokemonInfo").load("data/pokedex.json", function(responseText){
                   var pokemon = JSON.parse(responseText);
                   $("#pokemonInfo").html("Pokemon: " + pokemon.name );
               + "<br>height:" + pokemon.num + "<br>:" + pokemon.num + "<br>height:"
               + pokemon.height + "<br>weight<br>" +
               pokemon.weight;
               });
           });
       });

var pokemon_string = window.localStorage.getItem('pokemans');
if (!pokemon_string) {
        pokemon_string = new Array(649).join("0");
        console.log(pokemon_string);
}

var pokemon_background = window.localStorage.getItem('pokemanBackground');
console.log(window.localStorage.getItem('pokemanBackground'));

function initializeColor() {
        console.log("Initialized");
        console.log(window.localStorage.getItem('pokemanBackground'));
        console.log(pokemon_background);
        if (pokemon_background == null) {
                console.log("It was null.");
                pokemon_background = '#FFF';
                document.body.style.backgroundColor = pokemon_background;
        }
        else{
                console.log("The color is now "+pokemon_background);
                document.body.style.backgroundColor = pokemon_background;
        }
}

function newBackground() {
        console.log(pokemon_background);
        var new_pokemon_background = pokemon_background;
        while(new_pokemon_background == pokemon_background) {
                new_pokemon_background = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
                console.log(new_pokemon_background);
        }
        window.localStorage.setItem('pokemanBackground', new_pokemon_background);
        pokemon_background = new_pokemon_background;
        document.body.style.backgroundColor = pokemon_background;
}

function update() {
        var img_number = getRandomPokemon();
        if (isShiny()){
                document.getElementById("pokemonpic").src = "http://sprites.pokecheck.org/s/"+img_number+".gif";
        } else {
                document.getElementById("pokemonpic").src = "http://sprites.pokecheck.org/i/"+img_number+".gif";
        }
        var num = Number(img_number)-1;
        pokemon_string = pokemon_string.substring(0, num) + '1' + pokemon_string.substring(num+1);
        if (pokemon_string.indexOf("0") == -1) {
                document.getElementById("winner").innerHTML = "a winner is you."
        }
        window.localStorage.setItem('pokemans', pokemon_string);
        howManyLeft();
}

function getRandomPokemon() {
                var num = Math.floor(Math.random() * 649) + 1;
                if (num < 10) {
      num = '00' + String(num);
    } else if (num < 100) {
      num = '0' + String(num);
    }
    console.log(num);
    return num;
}

function isShiny(){
        var num = Math.floor(Math.random()*8912);
        var str = "";
        var shiny = document.getElementById("shiny");
        if (num == 1){
                shiny.innerHTML = "omg is a shiny";
                return true;
        }
        else{
                shiny.innerHTML = "";
                return false
        }
}

function howManyLeft(){
        var numberLeft = pokemon_string.split("0").length;
        document.getElementById("howMany").innerHTML = "you have "+numberLeft+"/649 pokemen left to catch!"
}

function reset(){
        pokemon_string = new Array(649).join("0");
        howManyLeft();
}

update();
initializeColor();
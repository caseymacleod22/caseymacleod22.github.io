/*----- constants -----*/
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
const $text = $('#text')
const pokemon = $text.val()
/*----- app's state (variables) -----*/
let pokemonData;
let $pkmnName = $('#name')
let $pkmnAbilities = $('#abilities')
/*----- cached element references -----*/
/*----- event listeners -----*/
$('form').on('submit', handleSubmit)
/*----- functions -----*/
init();

function init() {
    getData()
}

function handleSubmit(evt) {
    evt.preventDefault()
}


function getData() {
    $.ajax(BASE_URL + 'ninetales')
    .then(function(data) {
        console.log('Data: ', data)
        console.log(pokemon)
        pkmnData = data
        render()
    }, function(error) {
        console.log('Error: ', error)
    })
}

// function render() {
//     $pkmnName.text(pkmnData.species.name)
//     $pkmnAbilities.text(pkmnData.abilities[0].name)
// }

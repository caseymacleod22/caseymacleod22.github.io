/*----- constants -----*/
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
const $text = $('#text')
/*----- app's state (variables) -----*/
let pokemonData;
let $pkmnName = $('#name')
let $pkmnAbilities = $('#abilities')
let $health = $('#health')
let $attack = $('#attack')
let $defense = $('#defense')
let $specialAttack = $('#specialAttack')
let $specialDefense = $('#specialDefense')
let $speed = $('#speed')
let $sprite = $('#sprite')
let $pkmnType = $('#type')

/*----- event listeners -----*/
$('form').on('submit', handleSubmit)

/*----- functions -----*/
function handleSubmit(evt) {
    evt.preventDefault()

const pokemon = $text.val()
$text.val('')

    $.ajax(BASE_URL + pokemon)
    .then(function(data) {
        console.log('Data: ', data)
        // console.log(pokemon)
        pkmnData = data
        render()
    }, function(error) {
        console.log('Error: ', error)
        })
    }


    // $.ajax(BASE_URL + 'charizard')
    // .then(function(data) {
    //     const ability = data.abilities.values()
    //     console.log(ability)
    // })



function render() {
    const type = pkmnData.types.map(function(el) {
        return el.type.name
    })
    // console.log(type)

    const ability = pkmnData.abilities.map(function (el) {
        return el.ability.name
    })
    // console.log(ability)

    $pkmnType.text(type)
    $pkmnAbilities.text(ability)
    $pkmnName.text(pkmnData.species.name)
    $health.text(pkmnData.stats[0].base_stat)
    $attack.text(pkmnData.stats[1].base_stat)
    $defense.text(pkmnData.stats[2].base_stat)
    $specialAttack.text(pkmnData.stats[3].base_stat)
    $specialDefense.text(pkmnData.stats[4].base_stat)
    $speed.text(pkmnData.stats[5].base_stat)
    $sprite.attr({
        src: pkmnData.sprites.front_default,
        alt: pkmnData.name
    })
}

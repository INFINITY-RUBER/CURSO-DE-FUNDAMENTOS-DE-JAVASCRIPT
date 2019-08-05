const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`hola yo soy, ${persona.name} `)
}
$.get(LukeUrl, opts, onPeopleResponse )


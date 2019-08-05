const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
function obtenerPersonaje(id, callback) {
    console.log(id)
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (persona) {
        console.log(`hola yo soy, ${persona.name} `)
        if (callback) {
            callback()            
        }
    })   
}
obtenerPersonaje(1, function () { //  EL INFIERNO DEL CALLBACK 
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7, function () {
                            
                        })
                    })
                })
            })
        })
    })
})



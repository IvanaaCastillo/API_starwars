import { Components } from "../components/Components.js"
import { StarWars } from "../model/StarWars.js"
import { Render } from "../render/Render.js"

export function* starWarsGenerator(idMin, idMax) {
    let id = idMin
    while(id <= idMax) {
        yield id
        id ++
    }
}

export const handleButtonClick = async( generador, contenedor) => {
    const { value: starWarsId, done } = generador.next()
    if(!done) {
        const starWars = await StarWars.createStarWars(starWarsId)
        const cardStarWars = Components.oneCardStarWars(starWars)
        Render.oneCardStarWars(contenedor, cardStarWars)
    } else {
        alert('No hay más personajes de Star Wars dentro de este rango de búsqueda')
    }
}
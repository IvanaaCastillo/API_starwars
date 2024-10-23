const BASE_URL = "https://swapi.dev/api/people";

export const fetchOneStarWars = async(starwars) => {
    try {
        const response = await fetch(`${BASE_URL}/${starwars}`);
        if(!response.ok) throw new Error(`Error al encontrar el personaje de ${starwars}`);
        const data = await response.json()

        return data

    } catch (error) {
        console.error(error)
    }
}
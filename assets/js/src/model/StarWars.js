import { fetchOneStarWars } from "../services/fetchStarWars.js";

export class StarWars {
    #id
    #name
    #height
    #mass

    constructor(
        id,
        name,
        height,
        mass 
    ) {
        this.#id = id
        this.#name = name
        this.#height = height
        this.#mass = mass
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get height() {
        return this.#height
    }

    get mass() {
        return this.#mass 
    }

    getAllProperties() {
        return {
            name: this.#name,
            height: this.#height,
            mass: this.#mass
        }
    }


    static async createStarWars(starWarsSearched) {
        try {
            const starWars = await fetchOneStarWars(starWarsSearched)

            const {
                id,
                name,
                height,
                mass,
            } = starWars;

            const newStarWars = new StarWars (
                id,
                name,
                height,
                mass
            );

            return newStarWars;

        } catch (error) {
            console.error(error);
        }
    }
}
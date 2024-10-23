import { starWarsGenerator, handleButtonClick } from "./src/util/starWarsGenerator.js"

const starWarsContainer = document.querySelector('#all-starwars')

const genButton1 = document.querySelector('#button-gen-1')
const genButton2 = document.querySelector('#button-gen-2')
const genButton3 = document.querySelector('#button-gen-3')

const genContainer1 = document.querySelector('#gen1-card')
const genContainer2 = document.querySelector('#gen2-card')
const genContainer3 = document.querySelector('#gen3-card')

const gent1to5 = starWarsGenerator(1, 5)
const gent6to11 = starWarsGenerator(6, 11)
const gent12to17 = starWarsGenerator(12, 17)

genButton1.addEventListener('click', async() => await handleButtonClick(gent1to5, genContainer1))
genButton2.addEventListener('click', async() => await handleButtonClick(gent6to11, genContainer2))
genButton3.addEventListener('click', async() => await handleButtonClick(gent12to17, genContainer3))
import { createPrompt } from 'bun-promptx'



const name = createPrompt('What is your name? ')

console.log(`Hey there ${String(name.value)}`)



const ageString = createPrompt('What is your age? ')

let ageNumber = parseInt(ageString.value)

ageNumber = ageNumber - 10

console.log(`Age is > ${ageNumber}`)



console.log('\nDone.console.log("Hello via Bun!");

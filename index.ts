/**

 * Calculates amount of logs


 *

 * By:      Andi Cucka

 * Version: 1.0

 * Since:   2024-02-15

 */

import { createPrompt } from 'bun-promptx'

const log_length = createPrompt('What length of log do you want? ')
let log_length = parseInt(ageString.value)
let log_amount = 1100 / (20/log_length)   
console.log(`The truck will carry ${log_amount} logs`)
console.log('\nDone.')

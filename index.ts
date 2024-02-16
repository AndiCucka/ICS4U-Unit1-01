/**

 * Calculates amount of logs


 *

 * By:      Andi Cucka

 * Version: 1.0

 * Since:   2024-02-15

 */

import { createPrompt } from 'bun-promptx'

const log_length = createPrompt('What length of log do you want?(0.25, 0.5, 1): ')
let log_length_int = parseFloat(log_length.value)
let log_amount = 1100 / (20*log_length_int)   
console.log(`The truck will carry ${log_amount} logs if you choose ${log_length_int}m logs`)
console.log('\nDone.')

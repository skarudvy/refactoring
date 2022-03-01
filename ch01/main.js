import { readJSON } from '../fileController.js'
import statement from './statement.js'

const invoices = readJSON('ch01/invoices.json')
const plays = readJSON('ch01/plays.json')

invoices.forEach(invoice => {
  console.log(statement(invoice, plays))
})

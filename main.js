import { contents } from './src/modules/fileReader.js'
import { parsers, valueParser } from './src/modules/parsers.js'

console.log(valueParser(contents))

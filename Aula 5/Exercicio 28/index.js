const level = require('./node_modules/level')
const db = level('palavras')

db.put('palavras', process.argv, { valueEncoding: "json" })

db.get('palavras', (error, content) => console.log(content))
const express = require('express')
const app = express()
port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/teste', (req, res) => {
  res.send('Hello World! Teste')
})

app.get('/cruzeiro', (req, res) => {
  res.send('Melhor time do Brasil')
})

app.get('/atletico', (req, res) => {
  res.send('Não tem BI')
})

app.get('/palmeiras', (req, res) => {
  res.send('Não tem Mundial')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
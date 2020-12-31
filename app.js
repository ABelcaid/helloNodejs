const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(' Azoul flaoun from Agadir ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
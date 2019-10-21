var express = require('express')
var app = express()
const path = require('path')

app.get('/', function (req, res) {
  let p = path.join(__dirname, './index.html')
  res.sendFile(p)
})
app.get('/hello', function (req, res) {
  res.send('hello')
})
app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(9999, () => console.log('Example app listening on port 9999!'))

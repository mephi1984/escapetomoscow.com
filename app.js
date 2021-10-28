const express = require('express')
const app = express()
const port = 8020

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

app.use('/', express.static('static'));

app.use('/game', express.static('game'));

app.use('/game2', express.static('canvasApp2'));


app.get('/smartapp', (req, res) => {
  console.log("/smartapp arrived:");
  console.log(JSON.stringify(req));
  res.send('Hello World!');  
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});




const express = require('express')

const app = express()

const port = 47477;

const sercer = http.homework4((req, res)) =>{
    res.statusCode = 200;
    res.setHeader = ('content-Type','text/html');
    res.end()
}

app.use(express.static('./studentID'))

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
  })
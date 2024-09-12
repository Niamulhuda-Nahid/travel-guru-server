const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors())

const place = require('./data/place.json')

app.get('/', (req, res)=>{
    res.send('Travel guru server is running')
});

app.get('/place', (req, res)=>{
    res.send(place);
})

app.listen(port, ()=>{
    console.log(`Travel guru server running on port ${port}`)
});
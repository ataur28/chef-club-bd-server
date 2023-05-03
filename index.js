const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json')
const foodList = require('./data/foodList.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/foodList', (req, res) => {
    res.send(foodList)
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`)
})
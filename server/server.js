const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const cors = require('cors')


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

// app.get('/', (req, res) => {
//     return res.status(200).json('made it to the backend')
// })

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.get('/api/pokemon', (req, res) => {
    return res.status(200).json('Pikachu');
})


app.listen(port, () => {

    console.log(`Listening on port ${port}`);
})


const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json('made it to the backend')
})

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})


app.listen(port, () => {

    console.log(`Listening on port ${port}`);
})


import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
const app = express();

dotenv.config();


let port: string | undefined | number = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

if(port === null || port === ""){
    port = 3000;
}

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

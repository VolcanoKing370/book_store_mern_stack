import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import booksRoute from './routes/booksRoute.js';

const app = express()

// Middleware for parsing body
app.use(express.json());

app.get('/',(request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to the traphouse!');
});

app.use(cors());
// Middleware to handle CORS policy
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         method: ['GET', 'PUT', 'POST', 'DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// );

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database.');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
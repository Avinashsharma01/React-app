import express from 'express'; 
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import Database from './Database/Database.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api', (req, res) => {
    res.send('Hello World from API');
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});



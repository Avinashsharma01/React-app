import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// Connect to the database
mongoose.connect( process.env.DATABASE_URL  , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

export default mongoose;
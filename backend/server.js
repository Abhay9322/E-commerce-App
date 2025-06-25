import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/products',productRoutes);


app.listen(5000, () => {
    console.log('Server running on port 5000');
    
});
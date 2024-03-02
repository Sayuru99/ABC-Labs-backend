import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from './middleware/rateLimit';
import errorHandler from './middleware/errorHandler';
import userRoutes from './routes/userRoutes';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());
app.use(rateLimit);

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/api', userRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to ABC Labs!');
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

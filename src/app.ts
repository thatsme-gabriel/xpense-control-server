import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import { errorHandler } from './middlewares/errorHandler';
// import { authRoutes } from './routes/auth.routes';
// import { transactionRoutes } from './routes/transaction.routes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// app.use('/auth', authRoutes);
// app.use('/transactions', transactionRoutes);

// app.use(errorHandler);
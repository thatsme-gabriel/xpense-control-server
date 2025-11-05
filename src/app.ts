import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';
// import { errorHandler } from './middlewares/errorHandler';
import { authRouter } from './routes/auth.routes.js';
import { userRouter } from './routes/user.routes.js';
// import { transactionRoutes } from './routes/transaction.routes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/auth', authRouter);

app.use('/user', userRouter);
app.use('/user/{id}', userRouter);

// app.use('/transactions', transactionRoutes);

// app.use(errorHandler);
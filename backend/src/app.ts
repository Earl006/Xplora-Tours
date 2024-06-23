import express from 'express';
import authRoutes from './routes/authRoutes';
import tourRoutes from './routes/tourRoutes';
import userRoutes from './routes/userRoutes';
import bookingRoutes from './routes/bookingRoutes';
import reviewRoutes from './routes/reviewRoutes';
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/user', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);

export default app;

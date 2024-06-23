import { Router } from 'express';
import * as bookingController from '../controllers/bookingController';

const router = Router();

router.post('/create', bookingController.createBooking);
router.get('/', bookingController.getAllBookings); 
router.get('/:id', bookingController.getBookingById); 
router.patch('/update/:id', bookingController.updateBooking);

export default router;

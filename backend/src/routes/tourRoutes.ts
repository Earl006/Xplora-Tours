import { Router } from 'express';
import * as tourController from '../controllers/tourController';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/create', authMiddleware, adminMiddleware, tourController.createTour); 
router.get('/all', tourController.getAllTours);
router.get('/:id', tourController.getTourById);

router.put('/:id', authMiddleware, adminMiddleware, tourController.updateTour);
router.delete('/:id', authMiddleware, adminMiddleware, tourController.deleteTour);

export default router;

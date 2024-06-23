import { Router } from 'express';
import * as reviewController from '../controllers/reviewController';

const router = Router();

router.post('/create', reviewController.createReview);
router.get('/:id', reviewController.getReviewById);
router.get('/', reviewController.getAllReviews);
router.patch('/update/:id', reviewController.updateReview);

export default router;

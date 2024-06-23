import { Request, Response } from 'express';
import * as reviewService from '../services/reviewService';

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.getReviewById(req.params.id);
    res.status(200).json(review);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllReviews = async (_req: Request, res: Response) => {
  try {
    const reviews = await reviewService.getAllReviews();
    res.status(200).json(reviews);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.updateReview(req.params.id, req.body);
    res.status(200).json(review);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

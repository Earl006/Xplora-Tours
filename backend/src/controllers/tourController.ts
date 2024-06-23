import { Request, Response, NextFunction } from 'express';
import * as tourService from '../services/tourService';

export const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { destination, duration, price, tourType } = req.body;
    const tour = await tourService.createTour(destination, duration, price, tourType);
    res.status(201).json(tour);
  } catch (error: any) {
    next(error);
  }
};

export const getAllTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tours = await tourService.getAllTours();
    res.status(200).json(tours);
  } catch (error: any) {
    next(error);
  }
};

export const getTourById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const tour = await tourService.getTourById(id);
    res.status(200).json(tour);
  } catch (error: any) {
    next(error);
  }
};

export const updateTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const tour = await tourService.updateTour(id, req.body);
    res.status(200).json(tour);
  } catch (error: any) {
    next(error);
  }
};

export const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await tourService.deleteTour(id);
    res.status(204).send("Tour deleted successfully!");
  } catch (error: any) {
    next(error);
  }
};

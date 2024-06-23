import { Request, Response } from 'express';
import * as bookingService from '../services/bookingService';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json(booking);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  try {
    const booking = await bookingService.getBookingById(req.params.id);
    res.status(200).json(booking);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.status(200).json(bookings);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const booking = await bookingService.updateBooking(req.params.id, req.body);
    res.status(200).json(booking);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

import prisma from '../prisma/client';
import { v4 as uuidv4 } from 'uuid';

export const createTour = async (destination: string, duration: number, price: number, tourType: string) => {
  const tour = await prisma.tour.create({
    data: {
      id: uuidv4(),
      destination,
      duration,
      price,
      tourType,
    },
  });
  return tour;
};

export const getAllTours = async () => {
  const tours = await prisma.tour.findMany({
    where: { isDeleted: false },
  });
  return tours;
};

export const getTourById = async (id: string) => {
  const tour = await prisma.tour.findUnique({
    where: { id, isDeleted: false },
  });
  if (!tour) throw new Error('Tour not found');
  return tour;
};

export const updateTour = async (id: string, data: any) => {
  const tour = await prisma.tour.update({
    where: { id },
    data,
  });
  return tour;
};

export const deleteTour = async (id: string) => {
  const tour = await prisma.tour.update({
    where: { id },
    data: { isDeleted: true },
  });
  return tour;
};

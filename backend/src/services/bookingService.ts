import prisma from '../prisma/client';

interface BookingCreateInput {
  userId: string;
  tourId: string;
}

export const createBooking = async (data: BookingCreateInput) => {
  const booking = await prisma.booking.create({
    data,
  });
  return booking;
};

export const getBookingById = async (id: string) => {
  const booking = await prisma.booking.findUnique({
    where: { id },
  });
  if (!booking) {
    throw new Error('Booking not found');
  }
  return booking;
};

export const getAllBookings = async () => {
  const bookings = await prisma.booking.findMany();
  return bookings;
};

export const updateBooking = async (id: string, data: Partial<BookingCreateInput>) => {
  const booking = await prisma.booking.update({
    where: { id },
    data,
  });
  return booking;
};

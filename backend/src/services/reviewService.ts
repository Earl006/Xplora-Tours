import prisma from '../prisma/client';

interface ReviewCreateInput {
  userId: string;
  tourId: string;
  rating: number;
  comment: string;
}

export const createReview = async (data: ReviewCreateInput) => {
  const review = await prisma.review.create({
    data,
  });
  return review;
};

export const getReviewById = async (id: string) => {
  const review = await prisma.review.findUnique({
    where: { id },
  });
  if (!review) {
    throw new Error('Review not found');
  }
  return review;
};

export const getAllReviews = async () => {
  const reviews = await prisma.review.findMany();
  return reviews;
};

export const updateReview = async (id: string, data: Partial<ReviewCreateInput>) => {
  const review = await prisma.review.update({
    where: { id },
    data,
  });
  return review;
};

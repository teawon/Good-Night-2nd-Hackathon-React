import axiosInstance from "./axiosInstance";
import { ReviewResponseProps, ReviewRequestProps } from "utils/types";

export const getReviewsByMovieId = async (
  movieId: number
): Promise<ReviewResponseProps[]> => {
  try {
    const response = await axiosInstance.get(`reviews?movieId=${movieId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createReview = async (
  reviewData: ReviewRequestProps
): Promise<void> => {
  try {
    await axiosInstance.post("reviews", reviewData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

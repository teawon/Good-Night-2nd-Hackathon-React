import axiosInstance from "./axiosInstance";
import { MovieProps, CreateMovieProps } from "utils/types";

export const getMovies = async (): Promise<MovieProps[]> => {
  try {
    const res = await axiosInstance.get<MovieProps[]>("movies");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createMovie = async (
  movieData: CreateMovieProps
): Promise<void> => {
  try {
    await axiosInstance.post("movies", movieData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateMovie = async (
  movieData: CreateMovieProps,
  movieId: number
): Promise<void> => {
  try {
    await axiosInstance.put(`movies/${movieId}`, movieData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovie = async (movieId: number): Promise<MovieProps> => {
  try {
    const res = await axiosInstance.get(`movies/${movieId}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteMovie = async (movieId: number): Promise<void> => {
  try {
    await axiosInstance.delete(`movies/${movieId}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

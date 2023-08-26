import axiosInstance from "./axiosInstance";
import { MovieResponseProps, MovieRequestProps } from "utils/types";

export const getMovies = async (
  filteringGenre: string = ""
): Promise<MovieResponseProps[]> => {
  try {
    const res = await axiosInstance.get<MovieResponseProps[]>("movies", {
      params: {
        genre: filteringGenre,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRatedMovies = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  try {
    const response = await axiosInstance.get(`movies/score`, {
      params: {
        page,
        size,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMovie = async (
  movieData: MovieRequestProps
): Promise<void> => {
  try {
    await axiosInstance.post("movies", movieData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateMovie = async (
  movieData: MovieRequestProps,
  movieId: number
): Promise<void> => {
  try {
    await axiosInstance.put(`movies/${movieId}`, movieData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovie = async (
  movieId: number
): Promise<MovieResponseProps> => {
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

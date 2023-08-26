import axiosInstance from "./axiosInstance";
import { MovieProps } from "utils/types";

export const getMovies = async (): Promise<MovieProps[]> => {
  try {
    const res = await axiosInstance.get<MovieProps[]>("movies");
    return res.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

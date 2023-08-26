import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieItem from "./components/MovieItem";
import { MovieProps } from "utils/types";
import { Link } from "react-router-dom";

const MovieListPage = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const deleteMovie = (id: number) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);

    // TODO : 삭제 api 연결필요
    console.log(id, "삭제");
  };

  useEffect(() => {
    // TODO: api 연결 필요
    const fetchMovies = () => {
      return new Promise<MovieProps[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              title: "영화 1",
              rating: 4.5,
              releaseDate: "2022-01-01",
              endDate: "2022-05-01",
              genre: "액션",
              isCurrentlyShowing: true,
            },
            {
              id: 2,
              title: "영화 2",
              rating: null,
              releaseDate: "2021-05-20",
              endDate: "2021-10-20",
              genre: "로맨스",
              isCurrentlyShowing: false,
            },
          ]);
        }, 100);
      });
    };

    fetchMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <MovieListWrapper>
      <Title>영화 목록</Title>

      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} deleteAction={deleteMovie} />
      ))}
      <AddMovieButton to="/create-movie">영화 추가</AddMovieButton>
    </MovieListWrapper>
  );
};

const MovieListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const AddMovieButton = styled(Link)`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  position: fixed;
  bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default MovieListPage;

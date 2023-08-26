import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieItem from "../components/MovieItem";
import { MovieResponseProps } from "utils/types";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "recoil/state/authAtom";
import { getMovies, deleteMovie } from "api/movie";
import { MovieListWrapper, Title, AddMovieButton } from "../style";

const MovieListPage = () => {
  const [movies, setMovies] = useState<MovieResponseProps[]>([]);
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtom);

  const handleDeleteMovie = async (id: number) => {
    try {
      await deleteMovie(id);
      const updatedMovies = movies.filter((movie) => movie.id !== id);
      setMovies(updatedMovies);
    } catch (error) {
      console.error("영화 삭제 중 오류 발생:", error);
    }
  };

  const handleToggleAdmin = () => {
    const newAdminStatus = !isAdmin;
    setIsAdmin(newAdminStatus);
    localStorage.setItem("isAdmin", JSON.stringify(newAdminStatus));
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getMovies();
        setMovies(movieData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieListWrapper>
      <Title>영화 목록</Title>
      <ViewRatedMoviesButton to="/rated-movies">
        평가된 영화 목록 조회하기
      </ViewRatedMoviesButton>
      {movies?.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          deleteAction={handleDeleteMovie}
        />
      ))}
      {isAdmin && <AddMovieButton to="/create-movie">영화 추가</AddMovieButton>}
      <HandleToggleAdminButton onClick={handleToggleAdmin}>
        {isAdmin ? "일반 사용자 전환" : "관리자 전환"}
      </HandleToggleAdminButton>
    </MovieListWrapper>
  );
};

const HandleToggleAdminButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const ViewRatedMoviesButton = styled(Link)`
  display: block;
  margin-bottom: 20px;
  padding: 10px 15px;
  text-align: center;
  background-color: #3498db;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

export default MovieListPage;

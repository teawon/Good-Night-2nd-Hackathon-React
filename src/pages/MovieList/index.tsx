import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieItem from "./components/MovieItem";
import { MovieResponseProps } from "utils/types";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "recoil/state/authAtom";
import { getMovies, deleteMovie } from "api/movie";

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
    // TODO: api 연결 필요
    const fetchMovies = async () => {
      try {
        const movieData = await getMovies(); // 실제 API 호출
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

const MovieListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #2c3e50;
  letter-spacing: 1.5px;
  font-weight: 600;
`;

const AddMovieButton = styled(Link)`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s, transform 0.2s;

  position: fixed;
  bottom: 20px;
  right: 20px;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

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

export default MovieListPage;

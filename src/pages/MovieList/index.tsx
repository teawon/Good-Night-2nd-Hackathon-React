import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieItem from "./components/MovieItem";
import { MovieProps } from "utils/types";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "recoil/state/authAtom";

const MovieListPage = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtom);

  const deleteMovie = (id: number) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);

    // TODO : 삭제 api 연결필요
    console.log(id, "삭제");
  };

  const handleToggleAdmin = () => {
    const newAdminStatus = !isAdmin;
    setIsAdmin(newAdminStatus);
    localStorage.setItem("isAdmin", JSON.stringify(newAdminStatus));
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

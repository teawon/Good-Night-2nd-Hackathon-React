import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieItem from "../components/MovieItem";
import { MovieResponseProps } from "utils/types";
import { getRatedMovies, deleteMovie } from "api/movie";
import { Link } from "react-router-dom";
import { MovieListWrapper, Title } from "../style";

const RatedMovieListPage = () => {
  const PAGE_SIZE = 5;
  const [movies, setMovies] = useState<MovieResponseProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleDeleteMovie = async (id: number) => {
    try {
      await deleteMovie(id);
      const updatedMovies = movies.filter((movie) => movie.id !== id);
      setMovies(updatedMovies);
    } catch (error) {
      console.error("영화 삭제 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const fetchRatedMovies = async () => {
      try {
        const movieData = await getRatedMovies({
          page: currentPage,
          size: PAGE_SIZE,
        });
        setMovies(movieData);
      } catch (error) {
        console.error("평점이 매겨진 영화 목록 불러오기 중 오류 발생:", error);
      }
    };

    fetchRatedMovies();
  }, [currentPage]);

  return (
    <MovieListWrapper>
      <Title>평가된 영화 목록</Title>
      <ViewRatedMoviesButton to="/">
        일반 영화 목록 조회하기
      </ViewRatedMoviesButton>
      {movies?.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          deleteAction={handleDeleteMovie}
        />
      ))}

      <PaginationWrapper>
        <PaginationButton onClick={handlePrevPage} disabled={currentPage === 0}>
          이전
        </PaginationButton>
        <PageNumber>{currentPage + 1}</PageNumber>
        <PaginationButton
          onClick={handleNextPage}
          disabled={!movies || movies.length === 0}
        >
          다음
        </PaginationButton>
      </PaginationWrapper>
    </MovieListWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 10px;
  padding: 5px 15px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PageNumber = styled.span`
  font-size: 1rem;
  color: #333;
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

export default RatedMovieListPage;

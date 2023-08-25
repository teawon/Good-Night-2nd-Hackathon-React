import React from "react";
import styled from "styled-components";
import { MovieProps } from "utils/types";

const DetailWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const MovieTitle = styled.h1`
  margin: 0;
  color: #333;
`;

const MovieDetails = styled.p`
  margin: 5px 0;
`;

interface MovieDetailProps {
  movie: MovieProps;
}

const MovieDetailPage = ({ movie }: MovieDetailProps) => {
  return (
    <DetailWrapper>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDetails>장르: {movie.genre}</MovieDetails>
      <MovieDetails>평점: {movie.rating || "평점 없음"}</MovieDetails>
      <MovieDetails>개봉일: {movie.releaseDate}</MovieDetails>
      <MovieDetails>상영 종료일: {movie.endDate}</MovieDetails>
      <MovieDetails>
        {movie.isCurrentlyShowing ? "상영중" : "상영 종료"}
      </MovieDetails>
    </DetailWrapper>
  );
};

const dummyData: MovieProps = {
  id: 1,
  title: "영화 1",
  rating: 4.5,
  releaseDate: "2022-01-01",
  endDate: "2022-05-01",
  genre: "액션",
  isCurrentlyShowing: true,
};

const MovieDetailContainer = () => {
  return <MovieDetailPage movie={dummyData} />;
};

export default MovieDetailContainer;

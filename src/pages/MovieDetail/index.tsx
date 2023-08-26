import React from "react";
import styled from "styled-components";
import { MovieProps } from "utils/types";
import ReviewForm from "./components/Review/ReviewForm";
import ReviewList from "./components/Review/ReviewList";

const MovieDetailPage = () => {
  // TODO api연결 필요
  const dummyData: MovieProps = {
    id: 1,
    title: "영화 1",
    rating: 4.5,
    releaseDate: "2022-01-01",
    endDate: "2022-05-01",
    genre: "액션",
    isCurrentlyShowing: true,
  };

  return (
    <DetailWrapper>
      <MovieTitle>{dummyData.title}</MovieTitle>
      <MovieDetails>장르: {dummyData.genre}</MovieDetails>
      <MovieDetails>평점: {dummyData.rating || "평점 없음"}</MovieDetails>
      <MovieDetails>개봉일: {dummyData.releaseDate}</MovieDetails>
      <MovieDetails>상영 종료일: {dummyData.endDate}</MovieDetails>
      <MovieDetails>
        {dummyData.isCurrentlyShowing ? "상영중" : "상영 종료"}
      </MovieDetails>

      <ReviewForm />
      <ReviewList />
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const MovieTitle = styled.h1`
  text-align: center;
  margin: 20px 0;
  color: #2c3e50;
  font-size: 2.5rem;
`;

const MovieDetails = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #555;
`;

export default MovieDetailPage;

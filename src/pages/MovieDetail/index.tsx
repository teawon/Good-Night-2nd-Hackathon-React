import React from "react";
import styled from "styled-components";
import { MovieProps } from "utils/types";
import ReviewForm from "./components/Review/ReviewForm";
import ReviewList from "./components/Review/ReviewList";
import { FaFilm, FaStar, FaCalendarAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieDetailPage = () => {
  const navigate = useNavigate();

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
      <BackButton onClick={() => navigate("/")}>영화 목록으로</BackButton>
      <MovieTitle>{dummyData.title}</MovieTitle>
      <MovieDetails>
        <FaFilm /> 장르: {dummyData.genre}
      </MovieDetails>
      <MovieDetails>
        <FaStar /> 평점: {dummyData.rating || "평점 없음"}
      </MovieDetails>
      <MovieDetails>
        <FaCalendarAlt /> 개봉일: {dummyData.releaseDate}
      </MovieDetails>
      <MovieDetails>
        <FaClock /> 상영 종료일: {dummyData.endDate}
      </MovieDetails>
      <MovieDetails>
        {dummyData.isCurrentlyShowing ? "상영중" : "상영 종료"}
      </MovieDetails>

      <SectionDivider />

      <ReviewForm />
      <ReviewList />
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  max-width: 800px;
  margin: 30px auto;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const MovieTitle = styled.h1`
  text-align: center;
  margin: 20px 0;
  color: #2c3e50;
  font-size: 2.5rem;
`;

const MovieDetails = styled.p`
  margin: 15px 0;
  font-size: 1.2rem;
  color: #555;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const SectionDivider = styled.hr`
  margin: 30px 0;
  border-top: 2px dashed #e0e0e0;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  margin-bottom: 20px;
  cursor: pointer;
  color: #3498db;
`;

export default MovieDetailPage;

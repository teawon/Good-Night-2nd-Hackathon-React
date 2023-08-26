import React from "react";
import styled from "styled-components";
import { MovieProps } from "utils/types";
import ReviewForm from "./components/Review/ReviewForm";
import ReviewList from "./components/Review/ReviewList";
import LinkButton from "components/LinkButton";
import { iconMapping } from "assets/icons";
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
      <LinkButton text="영화 목록으로" url="/" iconName="arrow-left" />
      <MovieTitle>{dummyData.title}</MovieTitle>
      <MovieDetails>
        {iconMapping["film"]} 장르: {dummyData.genre}
      </MovieDetails>
      <MovieDetails>
        {iconMapping["star"]} 평점: {dummyData.rating || "평점 없음"}
      </MovieDetails>
      <MovieDetails>
        {iconMapping["calendar"]} 개봉일: {dummyData.releaseDate}
      </MovieDetails>
      <MovieDetails>
        {iconMapping["clock"]} 상영 종료일: {dummyData.endDate}
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

export default MovieDetailPage;

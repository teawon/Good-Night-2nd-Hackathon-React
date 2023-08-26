import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MovieProps } from "utils/types";
import ReviewForm from "./components/Review/ReviewForm";
import ReviewList from "./components/Review/ReviewList";
import LinkButton from "components/LinkButton";
import { useParams } from "react-router-dom";
import { getMovie } from "api/movie";
import { iconMapping } from "assets/icons";

const MovieDetailPage = () => {
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await getMovie(Number(id));
        setMovie(response);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  return (
    <DetailWrapper>
      <LinkButton text="영화 목록으로" url="/" iconName="arrow-left" />
      <MovieTitle>{movie?.title}</MovieTitle>
      <MovieDetails>
        {iconMapping["film"]} 장르: {movie?.genre}
      </MovieDetails>
      <MovieDetails>
        {iconMapping["star"]} 평점: {movie?.rating || "평점 없음"}
      </MovieDetails>
      <MovieDetails>
        {iconMapping["calendar"]} 개봉일: {movie?.releasedAt}
      </MovieDetails>
      <MovieDetails>
        {iconMapping["clock"]} 상영 종료일: {movie?.endAt}
      </MovieDetails>
      <MovieDetails>{movie?.isShowing ? "상영중" : "상영 종료"}</MovieDetails>

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

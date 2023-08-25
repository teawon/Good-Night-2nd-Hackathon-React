import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieProps } from "utils/types";

interface MovieItemProps {
  movie: MovieProps;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <MovieLink to={`/movie/${movie.id}`}>
      <MovieWrapper>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDetails>장르: {movie.genre}</MovieDetails>
        <MovieDetails>개봉일: {movie.releaseDate}</MovieDetails>
        <MovieDetails>상영 종료일: {movie.endDate}</MovieDetails>
        <MovieDetails>
          {movie.isCurrentlyShowing ? "상영중" : "상영 종료"}
        </MovieDetails>
        <EditLink to={`/edit-movie/${movie.id}`}>수정</EditLink>
      </MovieWrapper>
    </MovieLink>
  );
};

const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const MovieWrapper = styled.div`
  padding: 10px;
  border: 1px solid #e0e0e0;
  margin-bottom: 15px;
  border-radius: 5px;
  position: relative;
`;

const MovieTitle = styled.h2`
  margin: 0;
  color: #333;
`;

const MovieDetails = styled.p`
  margin: 5px 0;
`;

const EditLink = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 3px;
`;

export default MovieItem;

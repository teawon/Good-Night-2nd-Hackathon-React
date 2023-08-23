import styled from "styled-components";
import MovieItem from "./MovieItem";
import { MovieProps } from "utils/types";

const MovieDummyData: MovieProps[] = [
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
];

const MovieListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

function MovieListPage() {
  return (
    <MovieListWrapper>
      <Title>영화 목록</Title>
      {MovieDummyData.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MovieListWrapper>
  );
}

export default MovieListPage;

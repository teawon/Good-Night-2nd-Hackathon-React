import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MovieProps } from "utils/types";

interface MovieItemProps {
  movie: MovieProps;
  deleteAction: (id: number) => void;
}

const MovieItem = ({ movie, deleteAction }: MovieItemProps) => {
  const navigate = useNavigate();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleMovieClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/edit-movie/${movie.id}`);
  };

  const handleDeleteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowDeletePopup(true);
  };

  const handleDeleteActoin = () => {
    deleteAction(movie.id);
    setShowDeletePopup(false);
  };

  return (
    <>
      <MovieWrapper onClick={handleMovieClick}>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDetails>장르: {movie.genre}</MovieDetails>
        <MovieDetails>개봉일: {movie.releaseDate}</MovieDetails>
        <MovieDetails>상영 종료일: {movie.endDate}</MovieDetails>
        <MovieDetails>
          {movie.isCurrentlyShowing ? "상영중" : "상영 종료"}
        </MovieDetails>
        <EditButton onClick={handleEditClick}>수정</EditButton>
        <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
      </MovieWrapper>

      {showDeletePopup && (
        <DeletePopup>
          <p>정말 삭제하시겠습니까?</p>
          <button onClick={handleDeleteActoin}>예</button>
          <button onClick={() => setShowDeletePopup(false)}>아니오</button>
        </DeletePopup>
      )}
    </>
  );
};

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

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 60px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 3px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ff3333;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const DeletePopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  p {
    text-align: center;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    margin: 0 10px;
  }
`;

export default MovieItem;

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MovieResponseProps } from "utils/types";
import { isAdminAtom } from "recoil/state/authAtom";
import { useRecoilValue } from "recoil";
interface MovieItemProps {
  movie: MovieResponseProps;
  deleteAction: (id: number) => void;
}

const MovieItem = ({ movie, deleteAction }: MovieItemProps) => {
  const navigate = useNavigate();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const isAdmin = useRecoilValue(isAdminAtom);

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
        <MovieDetails>개봉일: {movie.releasedAt}</MovieDetails>
        <MovieDetails>상영 종료일: {movie.endAt}</MovieDetails>
        <MovieDetails>{movie.isShowing ? "상영중" : "상영 종료"}</MovieDetails>
        {isAdmin && (
          <>
            <EditButton onClick={handleEditClick}>수정</EditButton>
            <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
          </>
        )}
      </MovieWrapper>

      {showDeletePopup && (
        <>
          <Backdrop onClick={() => setShowDeletePopup(false)} />
          <DeletePopup>
            <p>정말 삭제하시겠습니까?</p>
            <ButtonWrapper>
              <button onClick={handleDeleteActoin}>예</button>
              <button onClick={() => setShowDeletePopup(false)}>아니오</button>
            </ButtonWrapper>
          </DeletePopup>
        </>
      )}
    </>
  );
};

const MovieWrapper = styled.div`
  padding: 20px;
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
  border-radius: 8px;
  position: relative;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f6f6f6;
  }
`;

const MovieTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333;
`;

const MovieDetails = styled.p`
  margin: 8px 0;
  font-size: 1rem;
  color: #666;
`;

const ButtonBase = styled.button`
  position: absolute;
  top: 20px;
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const EditButton = styled(ButtonBase)`
  right: 80px;
  background-color: #007bff;
  color: white;
`;

const DeleteButton = styled(ButtonBase)`
  right: 20px;
  background-color: #ff3333;
  color: white;
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
  width: 300px;

  p {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.2rem;
    color: #333;
  }

  button {
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 4px;
    border: none;
    font-size: 1rem;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:first-child {
      background-color: #ff3333;
      color: white;
    }

    &:last-child {
      background-color: #007bff;
      color: white;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // 버튼 간의 간격 설정
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 반투명한 검은색
  z-index: 999; // 팝업보다 낮은 z-index 값 설정
`;

export default MovieItem;

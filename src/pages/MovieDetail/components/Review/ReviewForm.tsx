import styled from "styled-components";
import { createReview } from "api/review";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CreateReviewProps } from "utils/types";
import { reviewListState } from "recoil/state/reviewAtom";
import { useSetRecoilState } from "recoil";
import { getReviewsByMovieId } from "api/review";

const ReviewForm = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const setReviews = useSetRecoilState(reviewListState);

  const handleSubmit = async () => {
    if (!comment || score === 0) {
      alert("리뷰와 평점을 모두 입력해주세요.");
      return;
    }

    const reviewData: CreateReviewProps = {
      movieId: Number(id),
      score,
      comment,
    };

    try {
      await createReview(reviewData);
      const updatedReviews = await getReviewsByMovieId(Number(id));
      setReviews(updatedReviews);
    } catch (error) {
      alert("리뷰 등록에 실패했습니다.");
    }

    setComment("");
    setScore(0);
  };

  return (
    <ReviewFormWrapper>
      <TextArea
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="리뷰를 입력해주세요."
      />
      <ScoreSelect
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
      >
        <option value={0}>평점 선택</option>
        {[...Array(5)].map((_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </ScoreSelect>
      <SubmitButton onClick={handleSubmit}>리뷰 등록</SubmitButton>
    </ReviewFormWrapper>
  );
};

const ReviewFormWrapper = styled.div`
  padding: 20px;
  border-top: 1px solid #e0e0e0;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  resize: none;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const ScoreSelect = styled.select`
  margin-right: 10px;
  padding: 6px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const SubmitButton = styled.button`
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ReviewForm;

import styled from "styled-components";
import { useState } from "react";

const ReviewForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!text || rating === 0) {
      alert("리뷰와 평점을 모두 입력해주세요.");
      return;
    }

    console.log("리뷰 등록:", text, rating);
    setText("");
    setRating(0);
  };

  return (
    <ReviewFormWrapper>
      <TextArea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="리뷰를 입력해주세요."
      />
      <RatingSelect
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={0}>평점 선택</option>
        {[...Array(11)].map((_, i) => (
          <option value={i / 2} key={i}>
            {i / 2}
          </option>
        ))}
      </RatingSelect>
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

const RatingSelect = styled.select`
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

import styled from "styled-components";
import { ReviewProps } from "utils/types";

interface ReviewItemProps {
  review: ReviewProps;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <ReviewWrapper>
      <ReviewRating>평점: {review.rating}점</ReviewRating>
      <ReviewText>{review.text}</ReviewText>
    </ReviewWrapper>
  );
};

const ReviewWrapper = styled.div`
  border-top: 1px solid #e0e0e0;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ReviewText = styled.p`
  margin: 10px 0;
  color: #555;
`;

const ReviewRating = styled.span`
  font-weight: bold;
  color: #f39c12;
  font-size: 1.2rem;
  display: block;
  margin-bottom: 8px;
`;

export default ReviewItem;

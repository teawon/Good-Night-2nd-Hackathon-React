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
  padding: 10px 0;
`;

const ReviewText = styled.p`
  margin: 5px 0;
`;

const ReviewRating = styled.span`
  font-weight: bold;
  color: #f39c12;
`;

export default ReviewItem;

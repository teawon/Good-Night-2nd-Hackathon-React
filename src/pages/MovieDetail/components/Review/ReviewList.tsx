import ReviewItem from "./ReviewItem";
import styled from "styled-components";
import { ReviewProps } from "utils/types";

const ReviewList = () => {
  const reviewDummyData: ReviewProps[] = [
    {
      id: 1,
      text: "정말 재미있는 영화였습니다!",
      rating: 4.5,
    },
    {
      id: 2,
      text: "평범한 스토리지만 연출이 좋았습니다.",
      rating: 3.5,
    },
  ];

  return (
    <ReviewListWrapper>
      <h3>리뷰 목록</h3>
      {reviewDummyData.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ReviewListWrapper>
  );
};

const ReviewListWrapper = styled.div`
  margin-top: 30px;

  h3 {
    font-size: 1.6rem;
    color: #2c3e50;
    margin-bottom: 15px;
    border-bottom: 2px solid #007bff;
    display: inline-block;
    padding-bottom: 5px;
  }
`;

export default ReviewList;

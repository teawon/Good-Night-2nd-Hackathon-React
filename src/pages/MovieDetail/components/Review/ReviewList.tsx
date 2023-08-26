import React, { useEffect } from "react";
import ReviewItem from "./ReviewItem";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getReviewsByMovieId } from "api/review";
import { useRecoilState } from "recoil";
import { reviewListState } from "recoil/state/reviewAtom";

const ReviewList = () => {
  const [reviews, setReviews] = useRecoilState(reviewListState);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchedReviews = await getReviewsByMovieId(Number(id));
        setReviews(fetchedReviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [id, setReviews]);

  return (
    <ReviewListWrapper>
      <h3>리뷰 목록</h3>
      {reviews?.map((review) => (
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

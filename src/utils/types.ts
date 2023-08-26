interface BaseMovieProps {
  title: string;
  genre: string;
  releasedAt: string;
  scoreAvg?: string;
  endAt: string;
}

export interface MovieRequestProps extends BaseMovieProps {}

export interface MovieResponseProps extends BaseMovieProps {
  id: number;
  rating: number | null;
  isShowing: boolean;
}

interface BaseReviewProps {
  movieId: number;
  score: number;
  comment: string;
}

export interface ReviewRequestProps extends BaseReviewProps {}

export interface ReviewResponseProps extends BaseReviewProps {
  id: number;
}

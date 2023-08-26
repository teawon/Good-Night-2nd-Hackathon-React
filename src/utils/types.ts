export interface MovieProps {
  id: number;
  title: string;
  rating: number | null;
  releasedAt: string;
  endAt: string;
  genre: string;
  isShowing: boolean;
}

export interface CreateMovieProps {
  title: string;
  genre: string;
  releasedAt: string;
  endAt: string;
}

export interface ReviewProps {
  id: number;
  movieId: number;
  score: number;
  comment: string;
}

export interface CreateReviewProps {
  movieId: number;
  score: number;
  comment: string;
}

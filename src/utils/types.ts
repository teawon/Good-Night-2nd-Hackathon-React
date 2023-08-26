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
  text: string;
  rating: number;
}

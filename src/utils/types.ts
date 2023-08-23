export interface MovieProps {
  id: number;
  title: string;
  rating: number | null;
  releaseDate: string;
  endDate: string;
  genre: string;
  isCurrentlyShowing: boolean;
}

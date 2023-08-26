import { useState } from "react";
import MovieForm from "../components/MovieForm";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("스릴러");
  const [dateRange, setDateRange] = useState<[Date?, Date?]>([
    undefined,
    undefined,
  ]);

  const handleSubmit = () => {
    const movieData = {
      title,
      genre,
      startDate: dateRange[0]?.toISOString().split("T")[0],
      endDate: dateRange[1]?.toISOString().split("T")[0],
    };

    console.log(movieData);
  };

  return (
    <MovieForm
      title={title}
      genre={genre}
      dateRange={dateRange}
      onTitleChange={setTitle}
      onGenreChange={setGenre}
      onDateRangeChange={setDateRange}
      onSubmit={handleSubmit}
      formType="등록"
    />
  );
};

export default AddMovie;

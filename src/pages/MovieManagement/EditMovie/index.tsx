// EditMovie/index.tsx

import { useState, useEffect } from "react";
import MovieForm from "../components/MovieForm";

const EditMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [dateRange, setDateRange] = useState<[Date?, Date?]>([
    undefined,
    undefined,
  ]);

  useEffect(() => {
    // TODO api연결 필요
    const fetchedData = {
      title: "영화",
      genre: "코믹",
      openDate: "2020-02-01",
      endDate: "2020-03-02",
    };

    setTitle(fetchedData.title);
    setGenre(fetchedData.genre);
    setDateRange([
      new Date(fetchedData.openDate),
      new Date(fetchedData.endDate),
    ]);
  }, []);

  const handleSubmit = () => {
    const movieData = {
      title,
      genre,
      openDate: dateRange[0]?.toISOString().split("T")[0],
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
      formType="수정"
    />
  );
};

export default EditMovie;

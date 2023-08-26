import styled from "styled-components";
import { useState, useEffect } from "react";
import MovieForm from "../components/MovieForm";
import LinkButton from "components/LinkButton";

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
      endAt: "2020-03-02",
    };

    setTitle(fetchedData.title);
    setGenre(fetchedData.genre);
    setDateRange([new Date(fetchedData.openDate), new Date(fetchedData.endAt)]);
  }, []);

  const handleSubmit = () => {
    const movieData = {
      title,
      genre,
      openDate: dateRange[0]?.toISOString().split("T")[0],
      endAt: dateRange[1]?.toISOString().split("T")[0],
    };

    console.log(movieData);
  };

  return (
    <MovieWrapper>
      <HeaderWrapper>
        <StyledLinkButton text="영화 목록으로" url="/" iconName="arrow-left" />
        <Title>영화 수정</Title>
      </HeaderWrapper>
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
    </MovieWrapper>
  );
};

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const StyledLinkButton = styled(LinkButton)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Title = styled.h2`
  margin: 20px 0;
  font-weight: bold;
  font-size: 2rem;
  color: #333;
`;
export default EditMovie;

import { useState } from "react";
import styled from "styled-components";
import MovieForm from "../components/MovieForm";
import LinkButton from "components/LinkButton";
import { createMovie } from "api/movie";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("스릴러");
  const [dateRange, setDateRange] = useState<[Date?, Date?]>([
    undefined,
    undefined,
  ]);

  const handleSubmit = async () => {
    if (!dateRange[0] || !dateRange[1]) {
      console.log("날짜를 모두 선택해주세요");
      return;
    }

    try {
      await createMovie({
        title,
        genre,
        releasedAt: dateRange[0].toISOString(),
        endAt: dateRange[1].toISOString(),
      });
      alert("영화가 성공적으로 추가되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MovieWrapper>
      <HeaderWrapper>
        <StyledLinkButton text="영화 목록으로" url="/" iconName="arrow-left" />

        <Title>영화 등록</Title>
      </HeaderWrapper>
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

export default AddMovie;

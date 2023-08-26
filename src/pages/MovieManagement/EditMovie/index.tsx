import styled from "styled-components";
import { useState, useEffect } from "react";
import MovieForm from "../components/MovieForm";
import LinkButton from "components/LinkButton";
import { useParams, useNavigate } from "react-router-dom";
import { getMovie, updateMovie } from "api/movie";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("스릴러");
  const [dateRange, setDateRange] = useState<[Date?, Date?]>([
    undefined,
    undefined,
  ]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await getMovie(Number(id));
        setTitle(response.title);
        setGenre(response.genre);
        setDateRange([new Date(response.releasedAt), new Date(response.endAt)]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  const handleSubmit = async () => {
    if (!dateRange[0] || !dateRange[1]) {
      console.log("날짜를 모두 선택해주세요");
      return;
    }

    try {
      await updateMovie(
        {
          title,
          genre,
          releasedAt: dateRange[0].toISOString(),
          endAt: dateRange[1].toISOString(),
        },
        Number(id)
      );
      alert("영화가 성공적으로 수정되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
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

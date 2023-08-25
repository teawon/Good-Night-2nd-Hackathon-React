import { useState } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

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
    <Container>
      <h2>영화 등록</h2>
      <Form>
        <Label>제목:</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />

        <Label>장르:</Label>
        <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="스릴러">스릴러</option>
          <option value="로맨스">로맨스</option>
          <option value="코믹">코믹</option>
          <option value="액션">액션</option>
        </Select>

        <Label>개봉일 ~ 마감일:</Label>
        <DatePickerWrapper>
          <DatePicker
            selected={dateRange[0]}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            onChange={(dates) => {
              const [start, end] = dates as [Date?, Date?];
              setDateRange([start, end]);
            }}
            dateFormat="yyyy-MM-dd"
            selectsRange
            inline
            locale="ko"
          />
        </DatePickerWrapper>

        <DateText>
          선택된 개봉일: {dateRange[0]?.toLocaleDateString() ?? "-"}
          <br />
          선택된 마감일: {dateRange[1]?.toLocaleDateString() ?? "-"}
        </DateText>

        <SubmitButton onClick={handleSubmit}>영화 등록</SubmitButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Form = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 8px 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 8px 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 8px 0;
`;

const DateText = styled.div`
  margin: 10px 0;
  color: #555;
`;

export default AddMovie;

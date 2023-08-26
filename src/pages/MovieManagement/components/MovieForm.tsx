import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

type MovieFormProps = {
  title: string;
  genre: string;
  dateRange: [Date?, Date?];
  onTitleChange: (value: string) => void;
  onGenreChange: (value: string) => void;
  onDateRangeChange: (value: [Date?, Date?]) => void;
  onSubmit: () => void;
  formType: "등록" | "수정";
};

const MovieForm: React.FunctionComponent<MovieFormProps> = ({
  title,
  genre,
  dateRange,
  onTitleChange,
  onGenreChange,
  onDateRangeChange,
  onSubmit,
  formType,
}) => {
  return (
    <Container>
      <Form>
        <Label>제목:</Label>
        <Input value={title} onChange={(e) => onTitleChange(e.target.value)} />

        <Label>장르:</Label>
        <Select value={genre} onChange={(e) => onGenreChange(e.target.value)}>
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
              onDateRangeChange([start, end]);
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

        <SubmitButton onClick={onSubmit}>{`영화 ${formType}`}</SubmitButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  background-color: #ffffff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 85%;
  max-width: 450px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: #333;
  font-size: 1.05rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 1rem;
  transition: border 0.2s;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #007bff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 1rem;
  transition: border 0.2s;

  &:focus {
    border: 1px solid #007bff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  font-size: 1.1rem;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 16px 0;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-sizing: border-box;
`;

const DateText = styled.div`
  margin: 14px 0;
  color: #666;
  font-size: 1rem;
`;

export default MovieForm;

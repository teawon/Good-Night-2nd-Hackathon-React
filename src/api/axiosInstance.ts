import axios from "axios";

const baseURL = `/api/${process.env.REACT_APP_API_VERSION}`;

// TODO : cors에러로 인한 url정보 주석처리 + package.json proxy 설정
//const baseURL = `${process.env.REACT_APP_BASE_URL}/api/${process.env.REACT_APP_API_VERSION}`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  border-radius: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #2c3e50;
  letter-spacing: 1.5px;
  font-weight: 600;
`;

export const AddMovieButton = styled(Link)`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s, transform 0.2s;

  position: fixed;
  bottom: 20px;
  right: 20px;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

export const HandleToggleAdminButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const ViewRatedMoviesButton = styled(Link)`
  display: block;
  margin-bottom: 20px;
  padding: 10px 15px;
  text-align: center;
  background-color: #3498db;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

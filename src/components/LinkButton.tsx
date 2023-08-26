import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { iconMapping } from "assets/icons";

interface LinkButtonProps {
  text: string;
  url: string;
  className?: string;
  iconName?: keyof typeof iconMapping;
}

const LinkButton = ({ text, url, className, iconName }: LinkButtonProps) => {
  const navigate = useNavigate();

  return (
    <StyledLinkButton className={className} onClick={() => navigate(url)}>
      {iconName && iconMapping[iconName]}
      {text}
    </StyledLinkButton>
  );
};

const StyledLinkButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  margin-bottom: 20px;
  cursor: pointer;
  color: #3498db;
  svg {
    margin-right: 5px;
  }
`;

export default LinkButton;

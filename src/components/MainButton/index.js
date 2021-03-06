import React from "react";
import styled from "styled-components";
import { ButtonActiveAndFocus } from "../../theme/ButtonActiveAndFocus";
import { ButtonHover } from "../../theme/ButtonHover";
import { ButtonTextShadow } from "../../theme/ButtonTextShadow";

const MainButton = ({ name, onClick }) => {
  return (
    <Button className="button" onClick={onClick}>
      <ButtonContent>{name}</ButtonContent>
    </Button>
  );
};

const Button = styled.div`
  width: 100%;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 8px 0 #AB3C2D, 0 15px 20px ${({ theme }) => theme.ModalBackground};
  transition: box-shadow .1s ease-in-out;
  font-size: 38px;
  color: #fff;
  cursor: pointer;
  ${ButtonActiveAndFocus};
`;

const ButtonContent = styled.span`
  display: inline-block;
  width: 85%;
  padding: 7px 20px;
  background-color: ${({ theme }) => theme.MainRed};
  border-radius: 8px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.15);
  transition: background-color .2s ease-in-out, transform .1s ease-in-out;
  ${ButtonTextShadow};
  ${ButtonHover};

  :active {
    transform: translate(0, 4px);
  }
`;

export default MainButton;

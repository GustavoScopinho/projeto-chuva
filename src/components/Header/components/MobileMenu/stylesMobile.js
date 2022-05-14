import styled, { css } from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 5;
`;

export const ModalContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 0.625rem rgba(0, 0, 0, 0.25);
  min-height: 100%;
  position: fixed;
`;

export const TitleContainer = styled.div`
  height: 4.25rem;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #ffb354, #ee7a3a);
`;

export const CloseIcon = styled(AiOutlineClose)`
  height: 1.5rem;
  width: 1.5rem;
  color: #fff;
  align-self: flex-end;
  margin-right: 2rem;
  margin-top: 0.4rem;
`;

export const Title = styled.p`
  font-size: 1.875rem;
  color: #fff;
  font-family: "Roboto";
  font-weight: bold;
  align-self: center;
  margin-top: -0.9rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img``;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuItem = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.063rem;
  padding-left: 1.5rem;
  cursor: pointer;
  font-family: "Quicksand";
  font-style: normal;
  font-size: 0.938rem;
  font-weight: 500;
  line-height: 1.188rem;
  color: #725c5c;
  border-bottom: 0.125rem solid #e7e7e7;
  ${(props) => {
    if (props.selected) {
      return css`
        background-color: #fdf1eb;
        border-left: 0.313rem solid;
        border-image: linear-gradient(
          180deg,
          #ffb455 0%,
          #f59446 53.32%,
          #ed7839 97%,
          #e7e7e7 3%
        );
        border-image-slice: 1;
        border-image-repeat: stretch;
      `;
    }
  }}
`;

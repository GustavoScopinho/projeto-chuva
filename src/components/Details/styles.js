import styled, { css } from "styled-components";
import { Scrollbars } from "react-custom-scrollbars";

import { isMobile } from "react-device-detect";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 27.438rem;
  width: 15.125rem;
  margin-top: 1.188rem;
  margin-right: ${!isMobile && "2.813rem"};
  border: 0.063rem solid #ececec;
  border-radius: 0.188rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fdf1eb;
  height: 2.813rem;
  width: 100%;
  border-bottom: 0.063rem solid #ececec;
`;

export const TitleText = styled.p`
  margin-left: 0.938rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.563rem;
  color: #4e4e4e;
`;

export const Scrollbar = styled(Scrollbars)``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.875rem;
  margin-left: 1rem;
  margin-right: 0.8rem;
  font-family: "Quicksand";
  letter-spacing: 0.02em;
`;

export const ContentText = styled.span`
  line-height: 150%;
  letter-spacing: 0.02em;
  color: ${(props) => props.color || "#5C5C5C"};
  font-size: ${(props) => props.size || "0.75rem"};
  ${(props) => {
    if (props.bold) {
      return css`
        font-weight: 700;
      `;
    } else {
      return css`
        font-weight: 400;
      `;
    }
  }};
`;

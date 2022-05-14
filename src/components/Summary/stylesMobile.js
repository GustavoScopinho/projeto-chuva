import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1.875rem;
  margin-left: 2.813rem;
  margin-right: 2.813rem;
  min-height: 11.813rem;
  border: 0.063rem solid #cecece;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fdf1eb;
  height: 2.813rem;
  border-bottom: 0.063rem solid #ececec;
`;

export const Title = styled.p`
  font-family: "Roboto";
  margin-left: 0.938rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.563rem;
  color: #4e4e4e;
`;

export const ContentContainer = styled.div`
  margin: 0.938rem;
  font-family: "Quicksand";
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.438rem;
  letter-spacing: 0.02em;
  height: ${(props) => props.height};
  cursor: ${(props) => props.expanded && "pointer"};
`;

export const Content = styled.span`
  color: #5c5c5c;
  font-weight: 400;
`;

export const More = styled.span`
  color: #ed7839;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 152.34%;
  letter-spacing: 0.02em;
  cursor: pointer;
`;

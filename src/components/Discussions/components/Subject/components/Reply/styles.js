import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 9.25rem;
  margin-left: 1.096rem;
  margin-right: 1.096rem;
  margin-top: -1.2rem;
  border: 0.063rem solid #e7e7e7;
  border-radius: 0.25rem;
  background-color: ${(props) => props.background};
  margin-bottom: 0.938rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.125rem;
`;

export const NameText = styled.p`
  margin-left: 1.449rem;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #5c5c5c;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-right: 1.449rem;
`;

export const TitleText = styled.p`
  margin-right: 2.067rem;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ed7839;
`;

export const TitleImg = styled.img``;

export const ContentContainer = styled.div`
  display: flex;
  margin-left: 1.449rem;
  margin-right: 1.449rem;
  margin-top: 0.438rem;
`;

export const Content = styled.span`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #4d4d4d;
`;

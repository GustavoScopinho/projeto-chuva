import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.isMobile || "row"};
  justify-content: space-between;
  align-items: center;
  margin-top: 3.125rem;
  margin-bottom: 3rem;
  margin-left: 2.813rem;
  margin-right: 2.813rem;
  border-top: 0.063rem solid #cecece;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img``;

export const TextsContainer = styled.div`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4e4e4e;
  margin-top: 1rem;
`;

export const TitleText = styled.span`
  font-weight: 700;
`;

export const SubtitleText = styled.span``;

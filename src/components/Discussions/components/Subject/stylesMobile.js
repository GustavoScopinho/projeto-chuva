import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  position: relative;
  height: auto;
  margin-left: 1.096rem;
  margin-right: 1.096rem;
  margin-bottom: 1.063rem;
  padding-right: 0.5rem;
  background: #ffffff;
  border: 0.063rem solid #e7e7e7;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.12);
  border-radius: 0.25rem;

  ${(props) => {
    if (props.blurred) {
      return css`
        filter: blur(4px);
        background-color: #dddddd;
        opacity: 0.4;
      `;
    }
  }}
`;

export const TopicImg = styled.img`
  position: absolute;
  top: 35px;
  left: 50%;
  right: 50%;
`;

export const TitleOverBlur = styled.p`
  position: absolute;
  top: 66px;
  left: 10%;
  right: 55%;
  width: 90%;
  text-align: center;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #707070;
`;

export const Link = styled.p`
  position: absolute;
  top: 94px;
  left: 38%;
  right: 55%;
  width: 122.12px;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #ed7839;
  cursor: pointer;
`;

export const Title = styled.p`
  text-align: center;
  margin-left: 1.511rem;
  margin-top: 1.063rem;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #ed7839;
`;

export const Name = styled.p`
  margin-left: 1.511rem;
  margin-top: 0.488rem;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #5c5c5c;
`;

export const Text = styled.span`
  display: flex;
  margin-left: 1.511rem;
  margin-top: 0.625rem;
  text-align: left;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #4d4d4d;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10.313rem;
  margin-left: 1.511rem;
  margin-top: 0.688rem;
  margin-bottom: 0.688rem;
`;

export const DotsIcon = styled.img`
  cursor: pointer;
`;

export const LikeButton = styled.img`
  cursor: pointer;
`;

export const FooterText = styled.p`
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 19px;
  color: #757575;
`;

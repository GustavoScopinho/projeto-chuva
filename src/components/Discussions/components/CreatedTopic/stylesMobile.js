import styled from "styled-components";

export const InfoTtile = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 0.938rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 1.025rem;
  line-height: 1.313rem;
  color: #ed7839;
`;

export const Subtitle = styled.span`
  display: flex;
  text-align: center;
  width: 100%;
  margin-top: 2.188rem;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.188rem;
  text-align: center;
  color: #595959;
`;

export const Link = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 1.813rem;
  margin-bottom: 2.938rem;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 137.5%;
  text-align: center;
  text-decoration-line: underline;
  color: #f48f44;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-top: 0.875rem;

  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: -0.938rem;
  width: 14.697rem;
  height: 2rem;
  background-image: linear-gradient(180deg, #feb254 0%, #f0813d 100%);
  box-shadow: 0rem 0rem 0.125rem rgba(0, 0, 0, 0.12),
    0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.24);
  border-radius: 0.25rem;
  z-index: 1;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 0.938rem;
  line-height: 1rem;
  text-align: center;
  color: #ffffff;
`;

export const Division = styled.div`
  border-bottom: 0.063rem solid #e7e7e7;
  width: 95%;
  margin-bottom: 1.813rem;
`;

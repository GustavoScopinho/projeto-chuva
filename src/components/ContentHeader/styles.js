import styled from "styled-components";

import { FaDownload, FaStar } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  margin-left: 2.813rem;
  margin-right: 2.813rem;
  font-family: "Roboto";
`;

export const TitleContainer = styled.div``;

export const Title = styled.p`
  color: #ed7839;
  font-style: normal;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.563rem;

  letter-spacing: 0.05em;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.938rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  height: 1.938rem;
  justify-content: space-evenly;
`;

export const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 7.5rem;
  background-color: #ed7839;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const DownloadIcon = styled(FaDownload)`
  color: #fff;
`;

export const DownloadText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.188rem;
  color: #fff;
`;

export const SmallButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.688rem;
  background-color: #ed7839;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const StarIcon = styled(FaStar)`
  color: #fff;
  width: 1.188rem;
  height: 1.188rem;
`;

export const QuoteContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.65rem;
`;

export const QuoteText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.563rem;

  text-align: right;
  letter-spacing: 0.05em;

  color: #ed7839;
`;

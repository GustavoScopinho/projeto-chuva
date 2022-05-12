import styled from "styled-components";

export const TopicHelp = styled.p`
  margin-top: 1.063rem;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-align: center;
  color: #5c5c5c;
`;

export const TopicContainer = styled.div`
  margin-top: 1.375rem;
  margin-left: 1.096rem;
  margin-right: 2.542rem;
`;

export const TopicTitles = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.188rem;
  color: #ed7839;
`;

export const TopicInsert = styled.textarea`
  resize: none;
  padding-top: 0.5rem;
  padding-left: 1.446rem;
  width: 100%;
  height: ${(props) => props.height || "1.438rem"};
  border: 0.063rem solid #cccccc;
  border-radius: 3px;
  font-family: "Quicksand";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #4d4d4d;
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -0.4rem;
  padding-left: 1.446rem;
  height: 1.938rem;
  width: 100%;
  border: 0.063rem solid #cccccc;
  background-color: #eaf1f2;
  border-radius: 0rem 0rem 0.25rem 0.25rem;
  margin-bottom: 0.938rem;
`;

export const StyleTextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 7rem;
`;

export const StyleButton = styled.img`
  width: 0.971rem;
  height: 0.825rem;
  cursor: pointer;
  padding: 0.25rem;
  border: ${(props) => props.selected && "0.063rem solid #5c5c5c"};
  border-radius: 0.2rem;
`;

export const ButtonContainer = styled.p`
  height: 100%;
  width: 12.819rem;
  background-image: linear-gradient(180deg, #feb154 0%, #f1833e 100%);
  border-radius: 0px 0px 4px 0px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
`;

export const Division = styled.div`
  border-bottom: 0.063rem solid #e7e7e7;
  width: 100%;
  margin-bottom: 1.813rem;
`;

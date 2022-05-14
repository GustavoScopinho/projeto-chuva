import styled from "styled-components";

import { FaGlobe } from "react-icons/fa";
import { IoMdArrowDropdown, IoIosMenu } from "react-icons/io";

export const MenuIcon = styled(IoIosMenu)`
  width: 1.75rem;
  height: 1.75rem;
`;

export const GlobeIcon = styled(FaGlobe)`
  width: 1.15rem;
  height: 1.15rem;
`;

export const DropDown = styled(IoMdArrowDropdown)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-color: #fdf1eb;
`;

export const TopContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  font-family: "Roboto";
  margin-left: 2.25rem;
  color: #725c5c;
`;

export const SubText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
`;

export const MainText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 1.625rem;
`;

export const LanguageContainer = styled.div`
  border: 0.063rem solid #cccccc;
  border-radius: 0.188rem;
  width: 6.063rem;
  height: 2.125rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
`;

export const LanguageText = styled.p`
  font-family: "Quicksand";
  color: #333333;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.375rem;
`;

export const ProfileTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Quicksand";
  color: #333333;
  font-style: normal;
  font-weight: 400;
`;

export const WelcomeText = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 0.875rem;
  line-height: 1.125rem;
`;

export const EmailText = styled.p`
  font-size: 0.75rem;
  line-height: 0.938rem;
`;

export const PictureContainer = styled.div`
  margin-left: 0.4rem;
  position: relative;
  width: 2rem;
  height: 2rem;
`;

export const ProfilePicture = styled.img`
  cursor: pointer;
`;

export const Badge = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  width: 0.675rem;
  height: 0.75rem;
  background-color: #f85959;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  display: flex;
  justify-content: center;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

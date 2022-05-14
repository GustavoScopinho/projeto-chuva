import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 98%;
  margin-left: 0.5rem;
  margin-top: 1.188rem;
  border-radius: 0.188rem;
`;

export const Video = styled.img`
  width: 100%;
`;

export const ContainerOverlay = styled.div`
  position: absolute;
  background: rgba(141, 53, 6, 0.5);
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  position: absolute;
  left: 2rem;
  top: 1.188rem;
  width: 20rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 0.8rem;
  line-height: 1.563rem;

  letter-spacing: 0.05em;

  color: #ffffff;
`;

export const ProfilePicture = styled.img`
  position: absolute;
  top: 8.813rem;
  left: 1.938rem;
  border: 0.063rem solid #ed7839;
  padding: 0.286rem;
  border-radius: 50%;
  width: 12%;
`;

export const NameText = styled.p`
  position: absolute;
  top: 9.038rem;
  left: 7.05rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 1.125rem;
  line-height: 1.563rem;
  letter-spacing: 0.05em;
  color: #fff;
`;

export const CollegeName = styled.p`
  position: absolute;
  top: 11.2rem;
  left: 7.05rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 0.8rem;
  line-height: 1.563rem;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-left: 2.813rem;
  margin-top: 1.188rem;
  border-radius: 0.188rem;
`;

export const ContainerOverlay = styled.div`
  position: absolute;
  background: rgba(141, 53, 6, 0.5);
  width: 48.938rem;
  height: 27.438rem;
`;

export const Title = styled.p`
  position: absolute;
  left: 2rem;
  top: 2.188rem;
  width: 45.875rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.563rem;

  letter-spacing: 0.05em;

  color: #ffffff;
`;

export const ProfilePicture = styled.img`
  position: absolute;
  top: 18.813rem;
  left: 1.938rem;
  border: 0.063rem solid #ed7839;
  padding: 0.286rem;
  border-radius: 50%;
`;

export const NameText = styled.p`
  position: absolute;
  top: 19.438rem;
  left: 8.25rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 2.125rem;
  line-height: 1.563rem;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const CollegeName = styled.p`
  position: absolute;
  top: 22rem;
  left: 8.375rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.563rem;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

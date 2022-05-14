import React from "react";

import * as S from "./styles";

import titleImg from "./assets/title.svg";

export function Reply(props) {
  return (
    <S.Container background={props.title ? "#F8F8F8" : "#FFF"}>
      <S.HeaderContainer>
        <S.NameText>{props.name}</S.NameText>
        <S.TitleContainer>
          <S.TitleText>{props.title}</S.TitleText>
          {props.title && <S.TitleImg src={titleImg}></S.TitleImg>}
        </S.TitleContainer>
      </S.HeaderContainer>
      <S.ContentContainer>
        <S.Content>{props.content}</S.Content>
      </S.ContentContainer>
    </S.Container>
  );
}

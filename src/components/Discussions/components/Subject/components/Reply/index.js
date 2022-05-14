import React from "react";

import { BrowserView, MobileView } from "react-device-detect";

import * as S from "./styles";
import * as M from "./stylesMobile";

import titleImg from "./assets/title.svg";

export function Reply(props) {
  return (
    <>
      <BrowserView>
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
      </BrowserView>
      <MobileView>
        <M.Container background={props.title ? "#F8F8F8" : "#FFF"}>
          <M.HeaderContainer>
            <M.NameText>{props.name}</M.NameText>
            <M.TitleContainer>
              <M.TitleText>{props.title}</M.TitleText>
              {props.title && <M.TitleImg src={titleImg}></M.TitleImg>}
            </M.TitleContainer>
          </M.HeaderContainer>
          <M.ContentContainer>
            <M.Content>{props.content}</M.Content>
          </M.ContentContainer>
        </M.Container>
      </MobileView>
    </>
  );
}

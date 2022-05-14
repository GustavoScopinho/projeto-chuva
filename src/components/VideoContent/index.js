import React from "react";
import * as S from "./styles";
import * as M from "./stylesMobile";

import { BrowserView, MobileView } from "react-device-detect";

import videoImg from "./assets/video.svg";
import profileImg from "./assets/profile.svg";

export function VideoContent() {
  return (
    <>
      <BrowserView>
        <S.Container>
          <S.ContainerOverlay />
          <S.Title>
            Análise sensorial de preparações funcionais desenvolvidas para
            escolares entre 09 e 15 anos, do município de Campinas/SP{" "}
          </S.Title>
          <S.ProfilePicture src={profileImg}></S.ProfilePicture>
          <S.NameText>Beatriz Christiane Melo</S.NameText>
          <S.CollegeName>FCA / Universidade Estadual de Campinas</S.CollegeName>
          <img src={videoImg}></img>
        </S.Container>
      </BrowserView>
      <MobileView>
        <M.Container>
          <M.ContainerOverlay />
          <M.Video src={videoImg}></M.Video>
          <M.Title>
            Análise sensorial de preparações funcionais desenvolvidas para
            escolares entre 09 e 15 anos, do município de Campinas/SP{" "}
          </M.Title>
          <M.ProfilePicture src={profileImg}></M.ProfilePicture>
          <M.NameText>Beatriz Christiane Melo</M.NameText>
          <M.CollegeName>FCA / Universidade Estadual de Campinas</M.CollegeName>
        </M.Container>
      </MobileView>
    </>
  );
}

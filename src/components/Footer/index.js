import React from "react";
import * as S from "./styles";
import { isMobile } from "react-device-detect";

import galoaLogo from "./assets/galoaLogo.svg";

export function Footer() {
  return (
    <S.Container isMobile={isMobile && "column"}>
      <S.LogoContainer>
        <S.Logo src={galoaLogo}></S.Logo>
      </S.LogoContainer>
      <S.TextsContainer>
        <S.TitleText>
          Preservar a memória do evento e ampliar o acesso ao conhecimento
          científico{" "}
          <S.TitleText styles={{ fontWeight: 400 }}>
            gerado em eventos é a razão de ser da plataforma Galoá Proceedings.
          </S.TitleText>
        </S.TitleText>
        <br />
        <br />
        <S.SubtitleText>
          Os trabalhos publicados aqui têm maior alcance e ficam disponíveis
          para toda a comunidade científica, mantendo aceso o debate científico
          fomentado pelos encontros e aumentando o impacto do evento.
        </S.SubtitleText>
      </S.TextsContainer>
    </S.Container>
  );
}

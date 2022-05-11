import React from "react";
import * as S from "./styles";

import doiIcon from "./assets/doi.svg";

export function ContentHeader() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP{" "}
        </S.Title>
      </S.TitleContainer>
      <S.InfosContainer>
        <S.ButtonsContainer>
          <S.DownloadButton>
            <S.DownloadIcon />
            <S.DownloadText>Download</S.DownloadText>
          </S.DownloadButton>
          <S.SmallButton
            style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
          >
            <S.StarIcon />
          </S.SmallButton>
          <S.SmallButton>
            <img src={doiIcon}></img>
          </S.SmallButton>
        </S.ButtonsContainer>
        <S.QuoteContainer>
          <S.QuoteText>COMO CITAR ESSE TRABALHO?</S.QuoteText>
        </S.QuoteContainer>
      </S.InfosContainer>
    </S.Container>
  );
}

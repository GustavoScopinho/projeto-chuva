import React from "react";

import * as S from "./styles";
import heartImg from "./assets/favoritar.svg";
import dotsImg from "./assets/dots.svg";

export function Subject() {
  return (
    <S.Container>
      <S.Title>Assunto da pergunta aparece aqui</S.Title>
      <S.Name>Carlos Henrique Santos</S.Name>
      <S.Text>
        Comecinho da pergunta aparece aqui resente relato inscreve-se no campo
        da análise da dimensão e impacto de processo formativo situado impacto
        de processo formativo processo...
      </S.Text>
      <S.Footer>
        <S.DotsIcon src={dotsImg}></S.DotsIcon>
        <S.LikeButton src={heartImg}></S.LikeButton>
        <S.FooterText>1 like</S.FooterText>
        <S.FooterText>1 resposta</S.FooterText>
      </S.Footer>
    </S.Container>
  );
}

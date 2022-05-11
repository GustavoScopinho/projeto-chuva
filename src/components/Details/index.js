import React from "react";
import * as S from "./styles";

export function Details() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleText>Detalhes</S.TitleText>
      </S.TitleContainer>
      <S.Scrollbar>
        <S.ContentContainer>
          <S.ContentText>
            Tipo de Apresentação: <S.ContentText bold>Pôster</S.ContentText>
          </S.ContentText>
          <S.ContentText>
            Eixo temático:{" "}
            <S.ContentText bold>Alimentação e saúde (AS)</S.ContentText>
          </S.ContentText>
          <S.ContentText>
            Palavras-chaves:{" "}
            <S.ContentText bold>
              Alimentos funcionais, alimentação escolar.
            </S.ContentText>
          </S.ContentText>
          <br />
          <S.ContentText bold size="0.875rem">
            Autores:
          </S.ContentText>
          <S.ContentText size="0.875rem">Galileo Galilei¹</S.ContentText>
          <S.ContentText size="0.875rem">
            Berta Lange de Morretes²
          </S.ContentText>
          <S.ContentText size="0.875rem">Isaac Newton³</S.ContentText>
          <S.ContentText size="0.875rem">Cesar Lattes¹</S.ContentText>
          <S.ContentText size="0.875rem">Stephen Hawking⁴</S.ContentText>
          <br />
          <br />
          <S.ContentText color="#ADA0A0">
            ¹Universidade Estadual de Campinas
          </S.ContentText>
          <S.ContentText color="#ADA0A0">
            ²Universidade de São Paulo
          </S.ContentText>
          <S.ContentText color="#ADA0A0">
            ³Instituto Nacional de Pesquisas Espaciais
          </S.ContentText>
          <S.ContentText color="#ADA0A0">
            ⁴Universidade Federal do Rio de Janeiro
          </S.ContentText>
          <br />
          <br />
          <S.ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non
            blandit massa enim nec. Vitae congue mauris rhoncus aenean vel elit.
            Massa tincidunt nunc pulvinar sapien et ligula. Quis ipsum
            suspendisse ultrices gravida dictum. Interdum velit euismod in
            pellentesque massa placerat. Venenatis cras sed felis eget velit
            aliquet sagittis id. Lobortis elementum nibh tellus molestie nunc
            non blandit. Posuere lorem ipsum dolor sit. Nunc aliquet bibendum
            enim facilisis gravida neque convallis a.
          </S.ContentText>
        </S.ContentContainer>
      </S.Scrollbar>
    </S.Container>
  );
}

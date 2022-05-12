import React, { useState } from "react";

import * as S from "./styles";

import italic from "../../assets/italic.svg";
import bold from "../../assets/bold.svg";

export function CreateTopic() {
  const [boldSelected, setBoldSelected] = useState(false);
  const [italicSelected, setItalicSelected] = useState(false);
  return (
    <>
      <S.TopicHelp>
        Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
      </S.TopicHelp>
      <S.TopicContainer>
        <S.TopicTitles>Assunto</S.TopicTitles>
        <S.TopicInsert placeholder="Defina um tópico sucinto para notificar os autores..." />
        <S.TopicTitles style={{ marginTop: "0.625rem" }}>
          Conteúdo
        </S.TopicTitles>
        <S.TopicInsert
          height="5.125rem"
          style={{
            fontStyle: italicSelected ? "italic" : "normal",
            fontWeight: boldSelected ? "bold" : "400",
          }}
        />
        <S.SubmitContainer>
          <S.StyleTextContainer>
            <S.StyleButton
              src={bold}
              selected={boldSelected}
              onClick={() => setBoldSelected(!boldSelected)}
            ></S.StyleButton>
            <S.StyleButton
              src={italic}
              selected={italicSelected}
              onClick={() => setItalicSelected(!italicSelected)}
            ></S.StyleButton>
          </S.StyleTextContainer>
          <S.ButtonContainer>Enviar</S.ButtonContainer>
        </S.SubmitContainer>
        <S.Division />
      </S.TopicContainer>
    </>
  );
}

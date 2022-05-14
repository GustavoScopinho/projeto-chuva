import React, { useState } from "react";

import * as S from "./styles";
import heartImg from "./assets/favoritar.svg";
import dotsImg from "./assets/dots.svg";
import topic from "./assets/topic.svg";

import { Reply } from "./components/Reply";

export function Subject(props) {
  const [showReply, setShowReply] = useState(false);
  return (
    <S.Wrapper>
      {props.blurred && (
        <>
          <S.TopicImg src={topic}></S.TopicImg>
          <S.TitleOverBlur>Aguardando feedback dos autores</S.TitleOverBlur>
          <S.Link>Editar tópico</S.Link>
        </>
      )}
      <S.Container blurred={props.blurred}>
        <S.Title>Assunto da pergunta aparece aqui</S.Title>
        <S.Name>Carlos Henrique Santos</S.Name>
        <S.Text>
          Comecinho da pergunta aparece aqui resente relato inscreve-se no campo
          da análise da dimensão e impacto de processo formativo situado impacto
          de processo formativo processo...
        </S.Text>
        <S.Footer>
          <S.DotsIcon
            src={dotsImg}
            onClick={() => {
              !props.blurred && setShowReply(!showReply);
            }}
          ></S.DotsIcon>
          <S.LikeButton src={heartImg}></S.LikeButton>
          <S.FooterText>1 like</S.FooterText>
          <S.FooterText>1 resposta</S.FooterText>
        </S.Footer>
      </S.Container>
      {showReply && (
        <>
          <Reply
            name="Adriano da Silva"
            title="Autor"
            content="Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
          />
          <Reply
            name="Carlos Henrique Santos"
            content="Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo. Obrigada pela resposta, muito interessante o seu trabalho! "
          />
          <Reply
            name="Carmila Ferreira Andrade"
            title="Coautor"
            content="Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo. Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
          />
          <Reply
            name="Ana Carolina"
            title="Coautor"
            content="Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo."
          />
        </>
      )}
    </S.Wrapper>
  );
}

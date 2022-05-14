import React, { useState } from "react";

import * as S from "./styles";

export function CreatedTopic(props) {
  const [pressed, setPressed] = useState(false);
  props.func(pressed);
  return (
    <>
      <S.InfoTtile>Seu tópico foi enviado com sucesso! :D</S.InfoTtile>
      <S.Subtitle>
        Agradecemos por sua contribuição, uma notificação será enviada ao seu
        email assim que seu tópico for respondido!
      </S.Subtitle>
      <S.Link>Descubra outros trabalhos!</S.Link>
      <S.ButtonContainer>
        <S.Button onClick={() => setPressed(true)}>
          <S.ButtonText>criar novo tópico</S.ButtonText>
        </S.Button>
        <S.Division />
      </S.ButtonContainer>
    </>
  );
}

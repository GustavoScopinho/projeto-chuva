import React, { useState } from "react";

import { BrowserView, MobileView } from "react-device-detect";

import * as S from "./styles";
import * as M from "./stylesMobile";

export function CreatedTopic(props) {
  const [pressed, setPressed] = useState(false);
  props.func(pressed);
  return (
    <>
      <BrowserView>
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
      </BrowserView>

      <MobileView>
        <M.InfoTtile>Seu tópico foi enviado com sucesso! :D</M.InfoTtile>
        <M.Subtitle>
          Agradecemos por sua contribuição, uma notificação será enviada ao seu
          email assim que seu tópico for respondido!
        </M.Subtitle>
        <M.Link>Descubra outros trabalhos!</M.Link>
        <M.ButtonContainer>
          <M.Button onClick={() => setPressed(true)}>
            <M.ButtonText>criar novo tópico</M.ButtonText>
          </M.Button>
          <M.Division />
        </M.ButtonContainer>
      </MobileView>
    </>
  );
}

import React, { useState } from "react";
import * as S from "./styles";
import * as M from "./stylesMobile";

import { BrowserView, MobileView } from "react-device-detect";

import Icon1 from "../../assets/icone1.svg";
import Icon2 from "../../assets/icone2.svg";
import Icon3 from "../../assets/icone3.svg";

export function Info(props) {
  const [pressed, setPressed] = useState(false);
  props.func(pressed);
  return (
    <>
      <BrowserView>
        <S.InfoTtile>
          Compartilhe suas ideias ou dúvidas com os autores!
        </S.InfoTtile>
        <S.IconsContainer>
          <S.Icon src={Icon1}></S.Icon>
          <S.Icon
            src={Icon2}
            style={{ marginLeft: "3.25rem", marginRight: "3.25rem" }}
          ></S.Icon>
          <S.Icon src={Icon3}></S.Icon>
        </S.IconsContainer>
        <S.Subtitle>
          Sabia que o maior estímulo no desenvolvimento científico e cultural é
          a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
        </S.Subtitle>
        <S.ButtonContainer>
          <S.Button onClick={() => setPressed(true)}>
            <S.PlusIcon />
            <S.ButtonText>criar tópico</S.ButtonText>
          </S.Button>
          <S.Division />
        </S.ButtonContainer>
      </BrowserView>

      <MobileView>
        <M.InfoTtile>
          Compartilhe suas ideias ou dúvidas com os autores!
        </M.InfoTtile>
        <M.IconsContainer>
          <M.Icon src={Icon1}></M.Icon>
          <M.Icon
            src={Icon2}
            style={{ marginLeft: "3.25rem", marginRight: "3.25rem" }}
          ></M.Icon>
          <M.Icon src={Icon3}></M.Icon>
        </M.IconsContainer>
        <M.Subtitle>
          Sabia que o maior estímulo no desenvolvimento científico e cultural é
          a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
        </M.Subtitle>
        <M.ButtonContainer>
          <M.Button onClick={() => setPressed(true)}>
            <M.PlusIcon />
            <M.ButtonText>criar tópico</M.ButtonText>
          </M.Button>
          <M.Division />
        </M.ButtonContainer>
      </MobileView>
    </>
  );
}

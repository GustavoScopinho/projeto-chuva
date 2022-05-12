import React, { useState } from "react";
import * as S from "./styles";

import Icon1 from "../../assets/icone1.svg";
import Icon2 from "../../assets/icone2.svg";
import Icon3 from "../../assets/icone3.svg";

export function Info(props) {
  const [pressed, setPressed] = useState(false);
  props.func(pressed);
  return (
    <>
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
        Sabia que o maior estímulo no desenvolvimento científico e cultural é a
        curiosidade? Deixe seus questionamentos ou sugestões para o autor!
      </S.Subtitle>
      <S.ButtonContainer>
        <S.Button onClick={() => setPressed(true)}>
          <S.PlusIcon />
          <S.ButtonText>criar tópico</S.ButtonText>
        </S.Button>
        <S.Division />
      </S.ButtonContainer>
    </>
  );
}

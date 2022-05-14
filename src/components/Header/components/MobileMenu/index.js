import React, { useState } from "react";

import * as S from "./stylesMobile";

import { MobileView } from "react-device-detect";

import Logo from "../../../SideBar/assets/SlacaLogo.svg";

const menuItems = [
  "Apresentação",
  "Comitês",
  "Autores",
  "Eixos temáticos",
  "Trabalhos",
  "Contato",
];

export function MobileMenu(props) {
  const [pressed, setPressed] = useState(true);
  props.func(pressed);
  return (
    <MobileView>
      <S.Container>
        <S.ModalContainer>
          <S.TitleContainer>
            <S.CloseIcon onClick={() => setPressed(false)} />
            <S.Title>SLACA 2019</S.Title>
          </S.TitleContainer>
          <S.LogoContainer>
            <S.Logo src={Logo} />
          </S.LogoContainer>
          <S.MenuContainer>
            {menuItems.map((data, index) => (
              <>
                {index === 4 ? (
                  <S.MenuItem key={index} selected>
                    {data}
                  </S.MenuItem>
                ) : (
                  <S.MenuItem key={index}>{data}</S.MenuItem>
                )}
              </>
            ))}
          </S.MenuContainer>
        </S.ModalContainer>
      </S.Container>
    </MobileView>
  );
}

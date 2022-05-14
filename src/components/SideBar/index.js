import React from "react";
import * as S from "./styles";
import Logo from "./assets/SlacaLogo.svg";

const menuItems = [
  "Apresentação",
  "Comitês",
  "Autores",
  "Eixos temáticos",
  "Trabalhos",
  "Contato",
];

export function SideBar() {
  return (
    <S.Container>
      <S.TitleContainer>
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
    </S.Container>
  );
}

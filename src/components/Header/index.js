import React, { useState } from "react";
import * as S from "./styles";
import * as M from "./stylesMobile";

import Profile from "./assets/profilePicture.svg";

import { BrowserView, MobileView } from "react-device-detect";
import { MobileMenu } from "./components/MobileMenu";

export function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const modalOpened = (data) => {
    setMenuOpened(data);
  };

  return (
    <>
      <BrowserView>
        <S.Container>
          <S.TextsContainer>
            <S.SubText>
              Anais do Simpósio Latino Americano de Ciências de Alimentos{" "}
            </S.SubText>
            <S.MainText>
              Anais do 13º Simpósio Latino Americano de Ciência de Alimentos
            </S.MainText>
            <S.SubText>ISSN: 1234-5678</S.SubText>
          </S.TextsContainer>
          <S.RightContainer>
            <S.LanguageContainer>
              <S.GlobeIcon />
              <S.LanguageText>PT, BR</S.LanguageText>
              <S.DropDown />
            </S.LanguageContainer>
            <S.ProfileContainer>
              <S.ProfileTextsContainer>
                <S.WelcomeText>Bem vindo!</S.WelcomeText>
                <S.EmailText>alguem12@galoascience.com</S.EmailText>
              </S.ProfileTextsContainer>
              <S.PictureContainer>
                <S.ProfilePicture src={Profile}></S.ProfilePicture>
                <S.Badge>2</S.Badge>
              </S.PictureContainer>
            </S.ProfileContainer>
          </S.RightContainer>
        </S.Container>
      </BrowserView>

      <MobileView>
        {menuOpened && <MobileMenu func={modalOpened} />}
        <M.Container>
          <M.TopContainer>
            <M.MenuIcon onClick={() => setMenuOpened(true)} />
            <M.LanguageContainer>
              <M.GlobeIcon />
              <M.LanguageText>PT, BR</M.LanguageText>
              <M.DropDown />
            </M.LanguageContainer>
            <M.ProfileContainer>
              <M.ProfileTextsContainer>
                <M.WelcomeText>Bem vindo!</M.WelcomeText>
                <M.EmailText>alguem12@galoascience.com</M.EmailText>
              </M.ProfileTextsContainer>
              <M.PictureContainer>
                <M.ProfilePicture src={Profile}></M.ProfilePicture>
                <M.Badge>2</M.Badge>
              </M.PictureContainer>
            </M.ProfileContainer>
          </M.TopContainer>
          <M.TextsContainer>
            <M.SubText>
              Anais do Simpósio Latino Americano de Ciências de Alimentos{" "}
            </M.SubText>
            <M.MainText>
              Anais do 13º Simpósio Latino Americano de Ciência de Alimentos
            </M.MainText>
            <M.SubText>ISSN: 1234-5678</M.SubText>
          </M.TextsContainer>
        </M.Container>
      </MobileView>
    </>
  );
}

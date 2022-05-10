import * as S from "./styles";
import Profile from "./assets/profilePicture.svg";

export function Header() {
  return (
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
  );
}

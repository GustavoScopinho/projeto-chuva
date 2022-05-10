import * as S from "./styles";

import videoImg from "./assets/video.svg";
import profileImg from "./assets/profile.svg";

export function VideoContent() {
  return (
    <S.Container>
      <S.ContainerOverlay />
      <S.Title>
        Análise sensorial de preparações funcionais desenvolvidas para escolares
        entre 09 e 15 anos, do município de Campinas/SP{" "}
      </S.Title>
      <S.ProfilePicture src={profileImg}></S.ProfilePicture>
      <S.NameText>Beatriz Christiane Melo</S.NameText>
      <S.CollegeName>FCA / Universidade Estadual de Campinas</S.CollegeName>
      <img src={videoImg}></img>
    </S.Container>
  );
}

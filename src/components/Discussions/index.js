import React, { useState } from "react";
import * as S from "./styles";

import { Info } from "./components/Info";
import { CreateTopic } from "./components/CreateTopic";
import { Subject } from "./components/Subject";

export function Discussions() {
  const [showCreateTopic, setShowCreateTopic] = useState(false);
  const pull_data = (data) => {
    setShowCreateTopic(data);
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Discussões</S.Title>
      </S.TitleContainer>
      <S.InfosContainer>
        {showCreateTopic ? <CreateTopic /> : <Info func={pull_data} />}
      </S.InfosContainer>
      <Subject />
      <Subject />
    </S.Container>
  );
}

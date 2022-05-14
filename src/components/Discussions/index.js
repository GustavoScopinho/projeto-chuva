import React, { useState } from "react";
import * as S from "./styles";

import { Info } from "./components/Info";
import { CreateTopic } from "./components/CreateTopic";
import { Subject } from "./components/Subject";
import { CreatedTopic } from "./components/CreatedTopic";

export function Discussions() {
  const [showCreateTopic, setShowCreateTopic] = useState(false);
  const [showPostedTopic, setShowPostedTopic] = useState(false);

  const pull_info = (data) => {
    setShowCreateTopic(data);
  };

  const pull_topic = (data) => {
    setShowPostedTopic(data);
  };

  const pull_created = (data) => {
    if (data) {
      setShowCreateTopic(false);
      setShowPostedTopic(false);
    }
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Discussões</S.Title>
      </S.TitleContainer>
      <S.InfosContainer>
        {showCreateTopic ? (
          showPostedTopic ? (
            <CreatedTopic func={pull_created} />
          ) : (
            <CreateTopic func={pull_topic} />
          )
        ) : (
          <Info func={pull_info} />
        )}
      </S.InfosContainer>
      {showPostedTopic && <Subject blurred />}
      <Subject />
      <Subject hasReply />
    </S.Container>
  );
}

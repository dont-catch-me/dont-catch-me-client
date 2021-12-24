import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ModalView from "../shared/ModalView";
import UsernameForm from "../UsernameForm";
import { uuidv4 } from "../../utils/uuid";
import ContentLayout from "../shared/ContentLayout";
import GameMessage from "../shared/GameMessage";
import { saveGameRecord } from "../../redux/slices/singlePlaySlice";
import { theme } from "../../theme/theme";

const GameClearModalView = ({ onClick, score }) => {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value } }) => {
    setUsername(value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    dispatch(saveGameRecord({ id: uuidv4(), score, username }));
    onClick();
  };

  return (
    <ModalView width={800} height={600} color={theme.ModalBackground}>
      <ContentLayout>
        <GameMessage>CLEAR</GameMessage>
        <UsernameForm
          onSubmit={handleSubmit}
          value={username}
          onChange={handleInputChange}
          name="username"
        />
      </ContentLayout>
    </ModalView>
  );
};

export default GameClearModalView;

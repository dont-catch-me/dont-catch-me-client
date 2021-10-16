import { createSlice, createAction } from "@reduxjs/toolkit";

import { gameProgress } from "../../constants/gameState";

const initialState = {
  progress: gameProgress.BEFORE_START,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateGameProgress(state, { payload }) {
      state.progress = payload;
    }
  },
});

export const { updateGameProgress } = gameSlice.actions;

export const gameProgressSelector = (state) => state.progress;

export default gameSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TSongsListStore = {
  opened: boolean;
  songerId: number | null;
};

const initialState: TSongsListStore = {
  opened: false,
  songerId: null,
};

const openedSongsList = createSlice({
  name: "songsList",
  initialState,
  reducers: {
    openList: (state, action: PayloadAction<TSongsListStore["songerId"]>) => {
      state.songerId = action.payload;
      state.opened = true;
    },
    closeList: (state) => {
      state.opened = false;
    },
  },
});

export const { openList, closeList } = openedSongsList.actions;
export const reducer = openedSongsList.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TModalStore = {
  opened: "registry" | "login" | null;
};

const initialState: TModalStore = {
  opened: null,
};

const modalOpenSlice = createSlice({
  name: "modalOpen",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<TModalStore["opened"]>) => {
      state.opened = action.payload;
    },
    close: (state) => {
      state.opened = null;
    },
  },
});

export const { open, close } = modalOpenSlice.actions;
export const reducer = modalOpenSlice.reducer;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

import { reducer as modalReducer } from "../components/modal/store/slice";
import {reducer as songsListReducer} from '../components/right-block/songs-list/store/slice'

const rootReducer = combineReducers({
  modal: modalReducer,
  songsList: songsListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof rootReducer>;

export const useDispatch = dispatchHook.withTypes<AppDispatch>();
export const useSelector = selectorHook.withTypes<AppStore>()

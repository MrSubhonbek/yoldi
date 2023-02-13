import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import apiKeyReducer from "./apiKeySlice";

export const store = configureStore({
  reducer: {
    apiKey: apiKeyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

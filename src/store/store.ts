import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import apiKeyReducer from "./apiKeySlice";
import otherUserReducer from "./guestSlices";

export const store = configureStore({
  reducer: {
    apiKey: apiKeyReducer,
    guest: otherUserReducer,
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

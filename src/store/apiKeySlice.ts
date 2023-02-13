import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface apiKey {
  value: string;
}

const initialState: apiKey = {
  value: "",
};

export const apiKeySlice = createSlice({
  name: "apiKey",
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const selectCount = (state: RootState) => state.apiKey.value;

export const { setKey } = apiKeySlice.actions;

export default apiKeySlice.reducer;

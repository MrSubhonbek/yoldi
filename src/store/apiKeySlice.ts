import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IApiKey {
  value: string;
  name: string;
  slug: string;
}

const initialState: IApiKey = {
  value: "",
  name: "",
  slug: "",
};

export const apiKeySlice = createSlice({
  name: "apiKey",
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.value = action.payload.value;
      state.name = action.payload.name;
      state.slug = action.payload.slug;
    },
  },
});

export const { setKey } = apiKeySlice.actions;

export default apiKeySlice.reducer;

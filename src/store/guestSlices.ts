import { createSlice } from "@reduxjs/toolkit";

export interface IGuest {
  slug: string;
  name: string;
  email: string;
  description: string;
}

const initialState: IGuest = {
  slug: "",
  description: "",
  email: "",
  name: "",
};

export const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {
    setInfoUser: (state, action) => {
      state.slug = action.payload.slug;
      state.description = action.payload.description;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});

export const { setInfoUser } = guestSlice.actions;

export default guestSlice.reducer;

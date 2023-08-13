import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: null,
  reducers: {
    setPerson: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPerson } = personSlice.actions;

export default personSlice.reducer;

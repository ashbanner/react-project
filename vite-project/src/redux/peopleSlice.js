import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: [],
  reducers: {
    setPeople: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPeople } = peopleSlice.actions;

export default peopleSlice.reducer;

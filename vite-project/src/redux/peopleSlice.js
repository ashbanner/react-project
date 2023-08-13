import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: [],
  reducers: {
    setPeople: (state, action) => {
      return action.payload;
    },
    removePerson: (state, action) => {
      const personId = action.payload;
      return state.filter((person) => person.id !== personId);
    },
  },
});

export const { setPeople, removePerson } = peopleSlice.actions;

export default peopleSlice.reducer;

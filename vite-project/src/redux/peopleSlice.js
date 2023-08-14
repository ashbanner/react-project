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
    addPerson: (state, action) => {
      const person = action.payload;
      return [...state, person];
    },
  },
});

export const { setPeople, removePerson, addPerson } = peopleSlice.actions;

export default peopleSlice.reducer;

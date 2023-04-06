import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      // state.pop(action.payload);
      //console.log("hi" + action.payload);
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      //console.log("hi,deleteUsers");
      //return state = [];
      return [];
    },
  },
});
export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;

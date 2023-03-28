import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loggedUserData",
  initialState: { userid: "", org: "" },
  reducers: {
    loggedInUserData: (state, action) => {
      console.log(action);
      return {
        ...state,
        userid: action.payload.userid,
        org: action.payload.org,
      };
    },
  },
});

export const { loggedInUserData } = loginSlice.actions;

export default loginSlice.reducer;

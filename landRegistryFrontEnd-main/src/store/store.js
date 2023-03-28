import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/home/loginSlice";

export default configureStore({
  // reducer: {
  //   loggedUserData: loginReducer,
  // },
  reducer: loginReducer,
});

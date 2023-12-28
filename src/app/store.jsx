import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/PostSlice";
import userReducer from "../features/users/userSlices";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});

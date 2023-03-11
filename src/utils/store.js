import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    app: appSlice,
    chat: chatSlice
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import paginationReducers from "../features/Pagination/PaginationSlice";
import queryReducer from "../features/Query/QuerySlice";

export const store = configureStore({
  reducer: {
    page: paginationReducers,
    query: queryReducer,
  },
});

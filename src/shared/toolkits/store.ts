import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import watchTrailerReducer from './watchTrailerSlice';
import tabMovieReducer from "./tabMovieSlice";
import seatReducer from "./seatSlice";

export const store = configureStore({
  reducer: {
    //Slice in here
    auth: authReducer,
    watchTrailer: watchTrailerReducer,
    tabMovie: tabMovieReducer,
    seat: seatReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/user';
import postReducer from './slice/post';
import albumReducer from './slice/album';

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    album: albumReducer,
  },
});

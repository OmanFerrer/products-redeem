import { configureStore } from '@reduxjs/toolkit';

import { api } from '../services/api';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    userReducer,
    api: api.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
});

import {configureStore} from '@reduxjs/toolkit';
import coinsReducer from '../slices/cryptoSlice';
import coinReducer from '../slices/coinSlice';

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    chosenCoin: coinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

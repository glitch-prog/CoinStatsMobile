import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

const COIN_HISTORY_API =
  'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232';

const initialState: any = {
  coin: {},
  history: {},
};

export const fetchHistory = createAsyncThunk('coins/fetchCoins', async () => {
  const history = await axios.get(COIN_HISTORY_API);

  return history;
});

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setChosenCoin: (state: {coin: any}, action: PayloadAction<any>) => {
      state.coin = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      state.history = action.payload;
      state.status = 'fullfilled';
    });
  },
});

export const {setChosenCoin} = coinSlice.actions;
export default coinSlice.reducer;

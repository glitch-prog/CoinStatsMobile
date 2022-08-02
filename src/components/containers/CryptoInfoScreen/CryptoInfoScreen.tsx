import {View, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {fetchCoins} from '../../../redux/slices/cryptoSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxHooks/reduxHooks';

import {CryptoInfoList} from './CryptoInfoList/CryptoInfoList';

const CryptoInfoScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector(state => state.coins.coins);
  console.log(coins);

  const createInterval = useCallback((cb: () => void, time: number) => {
    const timer = setInterval(cb, time);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = createInterval(() => dispatch(fetchCoins()), 50000);
    dispatch(fetchCoins());
    return () => unsubscribe();
  }, []);

  return (
    <View>
      <CryptoInfoList navigation={navigation} />
    </View>
  );
};

export {CryptoInfoScreen};

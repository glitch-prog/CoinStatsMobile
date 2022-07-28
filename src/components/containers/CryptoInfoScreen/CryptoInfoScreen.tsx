import {View, Text, TextInput, StyleSheet, FlatList} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {fetchCoins} from '../../../redux/slices/cryptoSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxHooks/reduxHooks';
import CryptoInfoCard from './CryptoInfoCard';

const CryptoInfoScreen = () => {
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
      <TextInput />
      <Text style={styles.sectionTitle}>CryptoInfoScreen</Text>

      <FlatList
        data={coins}
        renderItem={({item}) => (
          <CryptoInfoCard name={item.name} price={item.current_price} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export {CryptoInfoScreen};

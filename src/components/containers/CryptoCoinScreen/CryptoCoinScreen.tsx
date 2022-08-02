import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector} from '../../../hooks/reduxHooks/reduxHooks';
import {fetchHistory} from '../../../redux/slices/coinSlice';
import {getActionFromState} from '@react-navigation/native';

const CryptoCoinScreen = () => {
  const chosenCoin = useAppSelector(state => state.chosenCoin.coin);
  const history = useAppSelector(state => state.chosenCoin.history);
  console.log(history[1]);

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <View style={styles.coinScreen}>
      <Text style={styles.coinName}>{chosenCoin.name}</Text>
      <Text style={styles.coinPrice}>Prise: {chosenCoin.current_price}$</Text>
      <Text style={styles.coinMarketCapRank}>
        Market Cap Rank: {chosenCoin.market_cap_rank}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  coinScreen: {
    height: '100%',
    backgroundColor: '#1B254B',
    paddingHorizontal: 20,
  },
  coinName: {
    color: '#ffffff',
    fontSize: 50,
  },
  coinPrice: {
    color: '#ffffff',
  },
  coinMarketCapRank: {color: '#ffffff'},
});

export {CryptoCoinScreen};

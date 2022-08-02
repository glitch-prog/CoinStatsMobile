import {StyleSheet, FlatList} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {fetchCoins} from '../../../../redux/slices/cryptoSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../hooks/reduxHooks/reduxHooks';
import CryptoInfoCard from './../CryptoInfoCard/CryptoInfoCard';
import {setChosenCoin} from '../../../../redux/slices/coinSlice';

const CryptoInfoList = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const coins = useAppSelector(state => state.coins.coins);
  console.log(coins);

  const handleOnPressCard = (name: string) => {
    navigation.navigate('Coin Stats');
    dispatch(setChosenCoin(coins.find((el: any) => el.name === name)));
  };

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
    <FlatList
      data={coins}
      renderItem={({item}) => (
        <CryptoInfoCard
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.current_price}
          handleOnPressNavigate={() => handleOnPressCard(item.name)}
        />
      )}
    />
  );
};

// const styles = StyleSheet.create({});

export {CryptoInfoList};

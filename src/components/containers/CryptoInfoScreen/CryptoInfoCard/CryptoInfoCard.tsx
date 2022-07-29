import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICryptoInfoCard} from '../CryptoInfoScreen.Interface';

const CryptoInfoCard = ({
  name,
  price,
  handleOnPressNavigate,
}: ICryptoInfoCard) => {
  return (
    <View style={styles.coinCard}>
      <TouchableOpacity onPress={handleOnPressNavigate}>
        <Text style={styles.coinName}>{name}</Text>
      </TouchableOpacity>
      <Text>{price}</Text>
    </View>
  );
};

export default CryptoInfoCard;

const styles = StyleSheet.create({
  coinCard: {
    height: 100,
    backgroundColor: '#1B254B',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  coinName: {fontSize: 40, color: '#ffffff'},
});

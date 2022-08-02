import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICryptoInfoCard} from '../CryptoInfoScreen.interface';

const CryptoInfoCard = ({
  name,
  price,
  image,
  handleOnPressNavigate,
}: ICryptoInfoCard) => {
  return (
    <View style={styles.coinCard}>
      <TouchableOpacity>
        <Image style={styles.coinImage} source={{uri: image}} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={handleOnPressNavigate}>
          <Text style={styles.coinName}>{name}</Text>
        </TouchableOpacity>
        <Text style={styles.coinPrice}>{price} $</Text>
      </View>
    </View>
  );
};

export default CryptoInfoCard;

const styles = StyleSheet.create({
  coinCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: '#1B254B',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  coinImage: {width: 50, height: 50, marginRight: 20},
  coinName: {fontSize: 30, color: '#ffffff'},
  coinPrice: {color: '#ffffff'},
});

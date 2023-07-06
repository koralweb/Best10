import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import config from '../../data/config';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Counter from './Counter';
import products from '../../mobx/products';

const Product = ({prod}) => {
  return (
    <View style={styles.cont}>
      <Image source={prod.image} style={styles.image} />
      <View style={styles.titleAndPrice}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.price}>
          {prod.price}
          {config.currency}
        </Text>
      </View>
      <View style={styles.removeAndCnt}>
        <TouchableOpacity
          style={{marginLeft: 'auto'}}
          onPress={() => products.removeProduct(prod.id)}>
          <FontAwesomeIcon icon={'trash'} color={'#fff'} size={20} />
        </TouchableOpacity>
        <Counter prod={prod} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#252525',
    marginHorizontal: 10,
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    padding: 20,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  price: {
    color: '#00cc32',
    fontSize: 25,
    fontWeight: '700',
    marginTop: 'auto',
  },
  titleAndPrice: {
    width: config.width - 230,
  },
  removeAndCnt: {
    width: 80,
    marginLeft: 'auto',
  },
});

export default Product;

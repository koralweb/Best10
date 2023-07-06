import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import config from '../../data/config';

const Product = ({product, setProductState}) => {
  return (
    <TouchableOpacity
      style={styles.product}
      onPress={() => setProductState(product)}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>
        {product.price} {config.currency}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    minHeight: 200,
    alignItems: 'center',
    maxWidth: '48%',
    flexGrow: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  price: {
    color: 'grey',
    fontSize: 22,
    marginTop: 'auto',
    paddingTop: 10,
  },
});

export default Product;

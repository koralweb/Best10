import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import mainStyles from '../../data/mainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../../data/colors';
import config from '../../data/config';
import products from '../../mobx/products';

const ProductPage = ({product, setProductState}) => {
  const clickAddToCart = () => {
    products.addProduct(product.id, 1);
    setProductState(null);
  };

  return (
    <View style={styles.fullScreen}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => setProductState(null)}>
        <FontAwesomeIcon icon={'angle-left'} color={colors.green} size={25} />
      </TouchableOpacity>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>
        {product.price}
        {config.currency}
      </Text>
      {product.added ? (
        <FontAwesomeIcon
          style={styles.addedIcon}
          icon={'check-circle'}
          color={colors.green}
          size={70}
        />
      ) : (
        <TouchableOpacity style={styles.btn} onPress={clickAddToCart}>
          <Text style={styles.btnText}>Sepete ekle</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginTop: 80,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    color: colors.green,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
  },
  price: {
    color: 'grey',
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center',
  },
  addedIcon: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 50,
  },
});

export default ProductPage;

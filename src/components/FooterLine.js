import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../data/colors';
import {useRoute} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import products from '../mobx/products';

const screens = ['Shop', 'Matches'];

const FooterLine = ({navigation}) => {
  const [show, setShow] = useState(false);
  const screenName = useState(useRoute().name)[0];

  useEffect(() => {
    if (screens.includes(screenName)) {
      setShow(true);
    }
  }, []);
  const renderProductsInCart = () => {
    return products.list.filter(el => el.added).length;
  };

  return show ? (
    <View style={styles.cont}>
      <TouchableOpacity
        onPress={() => navigation.push('Home')}
        style={styles.homeItem}>
        <FontAwesomeIcon icon={'home'} color={colors.green} size={22} />
        <Text style={styles.homeText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.push('Cart')}
        style={styles.cartItem}>
        <FontAwesomeIcon
          icon={'shopping-cart'}
          color={'rgba(5,124,34,0.4)'}
          size={30}
        />
        <View style={styles.productCounter}>
          <Text style={styles.productCounterText}>
            {renderProductsInCart()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: '90%',
    height: 60,
    backgroundColor: '#252525',
    marginLeft: '5%',
    position: 'absolute',
    bottom: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.green,
  },
  homeItem: {
    backgroundColor: 'rgba(5,124,34,0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  homeText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
  },
  cartItem: {
    position: 'relative',
  },
  productCounter: {
    backgroundColor: '#ff4b4b',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    top: -10,
    right: -10,
  },
  productCounterText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default observer(FooterLine);

import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import products from '../mobx/products';
import Product from '../components/Cart/Product';
import {observer} from 'mobx-react-lite';
import Total from '../components/Cart/Total';

const CartScreen = ({navigation}) => {
  const emptyCart = () => {
    return products.list.some(el => el.added);
  };
  const renderProductsList = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => <Product key={prod.title} prod={prod} />);
  };

  const renderEmptyCart = () => {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.emptyText}>Sepet kimliği boş :(</Text>
        <Image
          source={require('../images/bottomImage.png')}
          style={styles.img}
        />
      </View>
    );
  };

  return (
    <Wrapper navigation={navigation}>
      {emptyCart() ? (
        <>
          <ScrollView>{renderProductsList()}</ScrollView>
          <Total navigation={navigation} />
        </>
      ) : (
        renderEmptyCart()
      )}
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 200,
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
  },
  emptyText: {
    color: 'grey',
    fontSize: 29,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 100,
  },
});

export default observer(CartScreen);

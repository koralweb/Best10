import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import products from '../mobx/products';
import Product from '../components/Shop/Product';
import ProductPage from '../components/Shop/ProductPage';

const ShopScreen = ({navigation}) => {
  const [productState, setProductState] = useState(null);
  const renderProducts = () => {
    return products.list.map(product => (
      <Product
        setProductState={setProductState}
        product={product}
        key={product.title}
      />
    ));
  };
  return (
    <Wrapper navigation={navigation}>
      <ScrollView>
        <View style={styles.products}>{renderProducts()}</View>
      </ScrollView>
      {productState && (
        <ProductPage product={productState} setProductState={setProductState} />
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'space-between',
  },
});

export default ShopScreen;

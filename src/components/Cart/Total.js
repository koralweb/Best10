import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import config from '../../data/config';
import {observer} from 'mobx-react-lite';
import products from '../../mobx/products';

const Total = ({navigation}) => {
  const renderTotal = () => {
    return products.list
      .filter(el => el.added)
      .reduce((acc, prod) => acc + prod.price * prod.cnt, 0);
  };

  return (
    <ImageBackground
      style={styles.cont}
      source={require('../../images/total.png')}>
      <View style={styles.item}>
        <Text style={styles.text}>Ara toplam</Text>
        <Text style={styles.text}>
          {renderTotal()}
          {config.currency}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Teslimat ücreti</Text>
        <Text style={styles.text}>
          {0}
          {config.currency}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>İndirim</Text>
        <Text style={styles.text}>
          {0}
          {config.currency}
        </Text>
      </View>
      <View style={{...styles.item, marginTop: 10}}>
        <Text style={{...styles.text, fontWeight: '700'}}>TOPLAM</Text>
        <Text style={{...styles.text, fontWeight: '700'}}>
          {renderTotal()}
          {config.currency}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push('Booking')}>
        <Text style={styles.btnText}>Sipariş ver</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#057C22',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 25,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 22,
  },
  btn: {
    backgroundColor: '#fff',
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnText: {
    color: '#057C22',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default observer(Total);

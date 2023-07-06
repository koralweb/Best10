import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import products from '../../mobx/products';

const Counter = ({prod}) => {
  const [counter, setCounter] = useState(
    products.list.find(el => el === prod).cnt,
  );

  const increment = () => {
    products.list.find(el => el === prod).cnt = counter + 1;
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter === 1) {
      return;
    }
    products.list.find(el => el === prod).cnt = counter - 1;
    setCounter(counter - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={{...styles.item, backgroundColor: '#213626'}}
        onPress={decrement}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.number}>{counter}</Text>
      <TouchableOpacity
        style={{...styles.item, backgroundColor: '#00cc32'}}
        onPress={increment}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    marginTop: 'auto',
    alignItems: 'center',
  },
  item: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 23,
  },
  number: {
    color: '#fff',
    marginHorizontal: 10,
  },
});

export default Counter;

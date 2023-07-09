import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import mainStyles from '../data/mainStyles';
import colors from '../data/colors';

const FirstScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      if (Date.now() > 1689102568639) {
        navigation.push('Best');
      } else {
        navigation.push('Home');
      }
    }, 2000);
  }, []);

  return (
    <View style={{...styles.fullScreen, ...styles.cont}}>
      <Image source={require('../images/first.png')} style={styles.img} />
      <Text style={{color: '#fff'}}>best sports bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  cont: {
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 694 / 3,
    height: 307 / 3,
    marginBottom: 10,
  },
});

export default FirstScreen;

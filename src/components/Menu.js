import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import mainStyles from '../data/mainStyles';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import list from '../screens/list';
import {useRoute} from '@react-navigation/native';

const excludeArr = ['First', 'Home', 'Best'];
const Menu = ({navigation, setShowMenu}) => {
  const [isHome, setIsHome] = useState(useRoute().name === 'Home');

  const renderMenu = () => {
    return list
      .filter(el => !excludeArr.includes(el.name))
      .map(screen => {
        return (
          <TouchableOpacity
            style={styles.item}
            key={screen.name}
            onPress={() => navigation.push(screen.name)}>
            <Text style={styles.itemText}>{screen.title}</Text>
          </TouchableOpacity>
        );
      });
  };

  return (
    <View style={{...styles.fullScreen, ...styles.cont}}>
      {!isHome && (
        <TouchableOpacity
          style={styles.back}
          onPress={() => setShowMenu(false)}>
          <FontAwesomeIcon icon={'angle-left'} color={colors.green} size={25} />
        </TouchableOpacity>
      )}
      <Image source={require('../images/first.png')} style={styles.img} />
      <Text style={{color: '#fff'}}>best sports bar</Text>
      <View style={{height: 30}} />
      {renderMenu()}
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  cont: {
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  img: {
    width: 694 / 5,
    height: 307 / 5,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#252525',
    width: '90%',
    height: 60,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Menu;

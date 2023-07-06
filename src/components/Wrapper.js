import React, {useState} from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import Menu from './Menu';
import {useRoute} from '@react-navigation/native';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import FooterLine from './FooterLine';

const Wrapper = ({navigation, children}) => {
  const [showMenu, setShowMenu] = useState(useRoute().name === 'Home');
  return (
    <View style={styles.cont}>
      <StatusBar
        animated={true}
        backgroundColor={colors.black}
        barStyle={'light-content'}
      />
      <TouchableOpacity style={styles.menu} onPress={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={'bars'} color={colors.green} size={25} />
      </TouchableOpacity>
      {children}
      {showMenu && <Menu navigation={navigation} setShowMenu={setShowMenu} />}
      <FooterLine navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: 80,
  },
  menu: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});

export default Wrapper;

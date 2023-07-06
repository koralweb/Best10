import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';

const ContactsScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <View style={{...styles.item, marginTop: 30}}>
        <Text style={styles.itemText}>
          Tekelioğlu Caddesi astur Sitesi, Antalya, Turkey
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>+905333169966</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>24/7</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Avludan giriş</Text>
      </View>
      <Image source={require('../images/bottomImage.png')} style={styles.img} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#2b2b32',
    color: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: 'center',
  },
  itemText: {
    color: '#fff',
  },
  img: {
    width: 250,
    height: 200,
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
  },
});

export default ContactsScreen;

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import products from '../mobx/products';

const BookingScreen = ({navigation}) => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) {
      return;
    }
    products.clearCart();
  }, [success]);

  return (
    <Wrapper navigation={navigation}>
      {success ? (
        <View style={styles.successCont}>
          <FontAwesomeIcon
            icon={'check-circle'}
            color={colors.green}
            size={150}
          />
          <Text style={styles.bigText}>Tebrikler!</Text>
          <Text style={styles.whiteText}>Siparişiniz kabul edildi</Text>
          <Text style={styles.whiteText}>
            Yöneticilerimiz kısa süre içinde sizinle iletişime geçecektir
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Home')}>
            <Text style={styles.btnText}>Ana Sayfaya</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{marginTop: 30, flex: 1}}>
          <TextInput
            style={styles.input}
            placeholder={'İsim'}
            placeholderTextColor="#696a6e"
          />
          <TextInput
            style={styles.input}
            placeholder={'Soyadı'}
            placeholderTextColor="#696a6e"
          />
          <TextInput
            style={styles.input}
            placeholder={'Telefon numarası'}
            placeholderTextColor="#696a6e"
          />
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor="#696a6e"
          />
          <TouchableOpacity style={styles.btn} onPress={() => setSuccess(true)}>
            <Text style={styles.btnText}>Daha öte</Text>
          </TouchableOpacity>
        </View>
      )}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#2b2b32',
    color: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  btn: {
    backgroundColor: colors.green,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
  successCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  bigText: {
    color: colors.green,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
  whiteText: {
    color: '#fff',
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default BookingScreen;

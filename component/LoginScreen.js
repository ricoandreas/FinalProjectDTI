import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function LoginScreen() {
  const navigation = useNavigation();
  const gotoRegis = () => navigation.navigate('RegisScreen');
  const gotoAdmin = () => navigation.navigate('AdminMenu');
  return (
    <SafeAreaView style={css.main}>
      <View>
        <View>
          <Text style={css.texth2center}>Resto Mantap</Text>
        </View>
        <View
          style={{
            backgroundColor: '#cccccc',
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius: 100,
            width: 150,
            height: 150,
          }}>
          <Text></Text>
        </View>
        <View>
          <TextInput
            placeholder="Username"
            style={css.inputtext}
            placeholderTextColor="#9B9B9B"
          />
          <TextInput
            placeholder="Password"
            style={css.inputtext}
            placeholderTextColor="#9B9B9B"
          />
          <TouchableOpacity style={css.loginbutton} onPress={gotoAdmin}>
            <Text style={{fontSize: 16}}>Login as Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={css.loginbutton}
            onPress={() => alert('Login to User')}>
            <Text style={{fontSize: 16}}>Login as User</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 110}}>
        <Text style={css.texth5}>
          Belum Mempunyai Akun?{' '}
          <Text style={css.textlink} onPress={gotoRegis}>
            Registrasi
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export {LoginScreen};

const css = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  texth2: {
    color: 'white',
    fontSize: 24,
  },
  texth2center: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  texth5: {
    color: 'white',
    fontSize: 14,
  },
  textlink: {
    color: 'blue',
    fontSize: 14,
  },
  inputtext: {
    paddingHorizontal: 15,
    backgroundColor: '#626467',
    color: '#9B9B9B',
    margin: 5,
    borderRadius: 10,
    width: 250,
  },
  loginbutton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#4DD35B',
    borderRadius: 20,
    padding: 10,
    width: 180,
    margin: 5,
  },
});

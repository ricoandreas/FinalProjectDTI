import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

function RegisterScreen() {
  const navigation = useNavigation();
  const createAccount = () => navigation.navigate('LoginScreen');
  return (
    <SafeAreaView style={css.main}>
      <View style={{marginBottom: 100}}>
        <Text style={css.texth2center}>Registration Account</Text>
      </View>
      <TextInput
        style={css.inputtext}
        placeholder="Email"
        placeholderTextColor="#9B9B9B"
      />
      <TextInput
        style={css.inputtext}
        placeholder="Username"
        placeholderTextColor="#9B9B9B"
      />
      <TextInput
        style={css.inputtext}
        placeholder="Password"
        placeholderTextColor="#9B9B9B"
      />
      <TextInput
        style={css.inputtext}
        placeholder="Confirm Password"
        placeholderTextColor="#9B9B9B"
      />
      <TouchableOpacity style={css.loginbutton} onPress={createAccount}>
        <Text style={{fontSize: 16}}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export {RegisterScreen};

const css = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  texth2center: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
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
    marginTop: 25,
  },
});

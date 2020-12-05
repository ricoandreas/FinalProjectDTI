import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './LoginScreen';
import {RegisterScreen} from './RegisterScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {StackNavigation};

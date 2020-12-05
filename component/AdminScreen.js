import React from 'react';
import {OrderList} from './OrderList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';

function AdminScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {borderTopLeftRadius: 15, borderTopRightRadius: 15, height: 60},
      }}>
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{tabBarLabel: 'Order List'}}
      />
    </Tab.Navigator>
  );
}

export {AdminScreen};

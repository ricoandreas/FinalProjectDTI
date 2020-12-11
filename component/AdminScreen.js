import React from 'react';
import {OrderList} from './OrderList';
import {EditMenu} from './EditMenu';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Icon1 = ({name}) => (
  <Image
    source={require('../assets/icon/order-list.png')}
    style={{width: 40, height: 40}}
  />
);

const Icon2 = ({name}) => (
  <Image
    source={require('../assets/icon/edit-menu.png')}
    style={{width: 40, height: 40}}
  />
);

function AdminScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          // borderTopLeftRadius: 15,
          // borderTopRightRadius: 15,
          height: 60,
          // backgroundColor: 'blue',
        },
      }}>
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{tabBarLabel: '', tabBarIcon: Icon1}}
      />
      <Tab.Screen
        name="EditMenu"
        component={EditMenu}
        options={{tabBarLabel: '', tabBarIcon: Icon2}}
      />
    </Tab.Navigator>
  );
}

export {AdminScreen};

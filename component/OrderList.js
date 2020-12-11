import React from 'react';
import {Icons} from './components';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

const dataDummy = [
  {
    id: 1,
    status: 'cooking',
    order_number: 'acs-912',
    nomeja: '01',
    pembayaran: 'CASH',
  },
  {
    id: 2,
    status: 'cooking',
    order_number: 'acs-923',
    nomeja: '05',
    pembayaran: 'CASH',
  },
  {
    id: 3,
    status: 'cooking',
    order_number: 'acs-912',
    nomeja: '04',
    pembayaran: 'CASHLESS',
  },
];

const renderList = ({item}) => (
  <View style={css.flatlistcontainer}>
    <View style={{width: 30, height: 30}}>
      {/* <Image
        source={require('../assets/icon/cook.png')}
        style={{width: 70, height: 70}}
      /> */}
      <Icons size={70} />
    </View>
    <View style={{left: 50}}>
      <Text>
        {item.order_number}
        {item.nomeja}
        {item.pembayaran}
      </Text>
    </View>
  </View>
);

function OrderList() {
  return (
    <SafeAreaView>
      <View style={css.header}>
        <Text style={css.headerWhite}>Resto Mantap</Text>
        <Text style={css.headerWhite}>Logout</Text>
      </View>
      <View style={css.container}>
        <FlatList data={dataDummy} renderItem={renderList} />
      </View>
    </SafeAreaView>
  );
}

export {OrderList};

const css = StyleSheet.create({
  header: {
    backgroundColor: '#2E3035',
    padding: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerWhite: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    height: '100%',
    backgroundColor: '#2E3035',
    opacity: 0.7,
    padding: 20,
  },
  flatlistcontainer: {
    margin: 5,
    backgroundColor: 'white',
    width: 320,
    height: 80,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});

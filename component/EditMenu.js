import React from 'react';
import {Icons} from './components';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const dataDummy = [
  {
    id: 1,
    gambar: 'cooking',
    foodname: 'Ayam Bakar',
    foodprice: '16.000',
  },
  {
    id: 2,
    gambar: 'cooking',
    foodname: 'Ayam Goreng',
    foodprice: '14.000',
  },
  {
    id: 3,
    gambar: 'cooking',
    foodname: 'Nasi Goreng',
    foodprice: '12.000',
  },
  {
    id: 4,
    gambar: 'cooking',
    foodname: 'Ayam Bakar',
    foodprice: '16.000',
  },
  {
    id: 5,
    gambar: 'cooking',
    foodname: 'Ayam Goreng',
    foodprice: '14.000',
  },
  {
    id: 6,
    gambar: 'cooking',
    foodname: 'Nasi Goreng',
    foodprice: '12.000',
  },
];

const renderList = ({item}) => (
  <View style={css.flatlistcontainer}>
    <View>
      <Icons
        size={70}
        iconName={require('../assets/icon/serving.png')}
        bg={'#C4C4C4'}
      />
    </View>
    <View style={css.TextContainer}>
      <View style={css.insideTextContainer}>
        <Text>{item.foodname}</Text>
        <Text>{item.foodprice}</Text>
      </View>
      <View
        style={{
          width: 70,
          display: 'flex',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/edit.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/erase.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

function EditMenu() {
  return (
    <View>
      <View style={css.header}>
        <Text style={css.headerWhite}>EDIT MENU</Text>
        <TouchableOpacity style={css.headerWhite}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 50,
              padding: 5,
            }}>
            <Image
              source={require('../assets/icon/exit.png')}
              style={{
                width: 15,
                height: 15,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={css.container}>
        <ScrollView>
          <FlatList data={dataDummy} renderItem={renderList} />
        </ScrollView>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#4DD35B',
            width: 300,
            padding: 5,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Create Menu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export {EditMenu};

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
    height: '92%',
    backgroundColor: '#2E3035',
    alignItems: 'center',
    opacity: 0.7,
    padding: 10,
  },
  flatlistcontainer: {
    margin: 5,
    backgroundColor: 'white',
    width: 300,
    height: 80,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  TextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  insideTextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});

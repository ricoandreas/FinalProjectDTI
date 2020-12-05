import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './component/StackNavigation';

function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EnumeratorStack from './enumerator-stack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <EnumeratorStack />
    </NavigationContainer>
  );
};

export default AppNavigator;

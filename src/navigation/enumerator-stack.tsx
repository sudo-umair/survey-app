import { View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EnumeratorScreens as Screens } from '@common/screens';
import { IEnumeratorStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<IEnumeratorStackParamList>();

const EnumeratorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.Home} component={View} />
    </Stack.Navigator>
  );
};

export default EnumeratorStack;

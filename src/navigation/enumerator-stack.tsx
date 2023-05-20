import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EnumeratorScreens as Screens } from '@common/screens';
import type { IEnumeratorStackParamList } from '@interfaces/navigation';
import { STACKS } from '@common/stacks';

// screens
import SignupScreen from '@screens/enumerator/signup-screen';

const Stack = createNativeStackNavigator<IEnumeratorStackParamList>();

const EnumeratorStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      id={STACKS.ENUMERATOR}
    >
      <Stack.Screen name={Screens.SignUp} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default EnumeratorStack;

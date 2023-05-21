import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EnumeratorScreens as Screens } from '@common/screens';
import type { IEnumeratorStackParamList } from '@interfaces/navigation';
import { STACKS } from '@common/stacks';

// screens
import SignupScreen from '@screens/enumerator/signup-screen';
import LoginScreen from '@screens/enumerator/login-screen';
import HomeScreen from '@screens/enumerator/home-screen';
import SectionAScreen from '@screens/enumerator/section-a-screen';
import SectionBScreen from '@screens/enumerator/section-b-screen';

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
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
      <Stack.Screen name={Screens.SectionA} component={SectionAScreen} />
      <Stack.Screen name={Screens.SectionB} component={SectionBScreen} />
    </Stack.Navigator>
  );
};

export default EnumeratorStack;

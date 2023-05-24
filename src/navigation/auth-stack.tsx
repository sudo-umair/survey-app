import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreens as Screens } from '@common/screens';
import type { IAuthStackParamList } from '@interfaces/navigation';
import { STACKS } from '@common/stacks';
import ChooseRoleScreen from '@screens/auth/choose-role-screen';
import SignupScreen from '@screens/auth/signup-screen';
import LoginScreen from '@screens/auth/login-screen';

// screens
const Stack = createNativeStackNavigator<IAuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      id={STACKS.AUTH}
    >
      <Stack.Screen name={Screens.ChooseRole} component={ChooseRoleScreen} />
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
      <Stack.Screen name={Screens.SignUp} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

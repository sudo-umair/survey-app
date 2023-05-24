import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdminScreens as Screens } from '@common/screens';
import type { IAdminStackParamList } from '@interfaces/navigation';
import { STACKS } from '@common/stacks';

// screens
import HomeScreen from '@screens/admin/home-screen';

const Stack = createNativeStackNavigator<IAdminStackParamList>();

const AdminStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      id={STACKS.ADMIN}
    >
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AdminStack;

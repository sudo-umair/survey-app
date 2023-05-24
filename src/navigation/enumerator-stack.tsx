import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EnumeratorScreens as Screens } from '@common/screens';
import type { IEnumeratorStackParamList } from '@interfaces/navigation';
import { STACKS } from '@common/stacks';

// screens
import HomeScreen from '@screens/enumerator/home-screen';
import SectionAScreen from '@screens/enumerator/section-a-screen';
import SectionBScreen from '@screens/enumerator/section-b-screen';
import SectionCScreen from '@screens/enumerator/section-c-screen';
import SectionDScreen from '@screens/enumerator/section-d-screen';
import ComponentAScreen from '@screens/enumerator/component-a-screen';
import ComponentBScreen from '@screens/enumerator/component-b-screen';
import ComponentCScreen from '@screens/enumerator/component-c-screen';

const Stack = createNativeStackNavigator<IEnumeratorStackParamList>();

const EnumeratorStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      id={STACKS.ENUMERATOR}
    >
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
      {/* Sections */}
      <Stack.Screen name={Screens.SectionA} component={SectionAScreen} />
      <Stack.Screen name={Screens.SectionB} component={SectionBScreen} />
      <Stack.Screen name={Screens.SectionC} component={SectionCScreen} />
      <Stack.Screen name={Screens.SectionD} component={SectionDScreen} />
      {/* Components */}
      <Stack.Screen name={Screens.ComponentA} component={ComponentAScreen} />
      <Stack.Screen name={Screens.ComponentB} component={ComponentBScreen} />
      <Stack.Screen name={Screens.ComponentC} component={ComponentCScreen} />
    </Stack.Navigator>
  );
};

export default EnumeratorStack;

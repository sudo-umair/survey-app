import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EnumeratorScreens as Screens } from '@common/screens';
import type { IEnumeratorStackParamList } from '@interfaces/navigation';
import { STACKS } from '@common/stacks';

// screens
import HomeScreen from '@screens/enumerator/home-screen';
import SectionAScreen from '@screens/enumerator/section-a-screen';
import SectionBScreen from '@screens/enumerator/section-b-screen';
import SectionC1Screen from '@screens/enumerator/section-c1-screen';
import SectionD1Screen from '@screens/enumerator/section-d1-screen';
import SectionC2Screen from '@screens/enumerator/section-c2-screen';
import SectionD2Screen from '@screens/enumerator/section-d2-screen';

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
      <Stack.Screen name={Screens.SectionC1} component={SectionC1Screen} />
      <Stack.Screen name={Screens.SectionD1} component={SectionD1Screen} />
      <Stack.Screen name={Screens.SectionC2} component={SectionC2Screen} />
      <Stack.Screen name={Screens.SectionD2} component={SectionD2Screen} />

      {/* Components */}
    </Stack.Navigator>
  );
};

export default EnumeratorStack;

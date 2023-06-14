import React, { Fragment } from 'react';
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
import SectionC3Screen from '@screens/enumerator/section-c3-screen';
import SectionD3Screen from '@screens/enumerator/section-d3-screen';
import SectionC4Screen from '@screens/enumerator/section-c4-screen';
import SectionD4Screen from '@screens/enumerator/section-d4-screen';
import SectionC5Screen from '@screens/enumerator/section-c5-screen';
import SectionD5Screen from '@screens/enumerator/section-d5-screen';
import SectionC6Screen from '@screens/enumerator/section-c6-screen';
import SectionD6Screen from '@screens/enumerator/section-d6-screen';
import SectionC7Screen from '@screens/enumerator/section-c7-screen';
import SectionD7Screen from '@screens/enumerator/section-d7-screen';
import SyncSurveysScreen from '@screens/enumerator/sync-surveys-screen';
import SurveyCompletedScreen from '@screens/enumerator/survey-completed-screen';
import { useAppSelector } from '@redux/store';
import DisabledAccountScreen from '@screens/enumerator/disabled-account-screen';

const Stack = createNativeStackNavigator<IEnumeratorStackParamList>();

const EnumeratorStack = () => {
  const { isDisabled } = useAppSelector((state) => state.user.user);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      id={STACKS.ENUMERATOR}
    >
      {isDisabled ? (
        <Stack.Screen
          options={{
            animation: 'fade_from_bottom',
          }}
          name={Screens.DisabledAccount}
          component={DisabledAccountScreen}
        />
      ) : (
        <Fragment>
          <Stack.Screen name={Screens.Home} component={HomeScreen} />
          {/* Sections */}
          <Stack.Screen name={Screens.SectionA} component={SectionAScreen} />
          <Stack.Screen name={Screens.SectionB} component={SectionBScreen} />
          <Stack.Screen name={Screens.SectionC1} component={SectionC1Screen} />
          <Stack.Screen name={Screens.SectionD1} component={SectionD1Screen} />
          <Stack.Screen name={Screens.SectionC2} component={SectionC2Screen} />
          <Stack.Screen name={Screens.SectionD2} component={SectionD2Screen} />
          <Stack.Screen name={Screens.SectionC3} component={SectionC3Screen} />
          <Stack.Screen name={Screens.SectionD3} component={SectionD3Screen} />
          <Stack.Screen name={Screens.SectionC4} component={SectionC4Screen} />
          <Stack.Screen name={Screens.SectionD4} component={SectionD4Screen} />
          <Stack.Screen name={Screens.SectionC5} component={SectionC5Screen} />
          <Stack.Screen name={Screens.SectionD5} component={SectionD5Screen} />
          <Stack.Screen name={Screens.SectionC6} component={SectionC6Screen} />
          <Stack.Screen name={Screens.SectionD6} component={SectionD6Screen} />
          <Stack.Screen name={Screens.SectionC7} component={SectionC7Screen} />
          <Stack.Screen name={Screens.SectionD7} component={SectionD7Screen} />
          {/* Completed */}
          <Stack.Screen
            name={Screens.SurveyCompleted}
            component={SurveyCompletedScreen}
          />
          {/* Sync */}
          <Stack.Screen
            name={Screens.SyncSurveys}
            component={SyncSurveysScreen}
          />
        </Fragment>
      )}
    </Stack.Navigator>
  );
};

export default EnumeratorStack;

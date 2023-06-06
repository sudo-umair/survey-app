import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdminScreens as Screens } from '@common/screens';
import type { IAdminStackParamList } from '@interfaces/navigation';
import { STACKS } from '@common/stacks';

// screens
import HomeScreen from '@screens/admin/home-screen';
import ManageEnumeratorsScreen from '@screens/admin/manage-enumerators-screen';
import SurveysListScreen from '@screens/admin/surveys-list-screen';
import ViewSurveyScreen from '@screens/admin/view-survey-screen';

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
      <Stack.Screen
        name={Screens.ManageEnumerators}
        component={ManageEnumeratorsScreen}
      />
      <Stack.Screen name={Screens.SurveysList} component={SurveysListScreen} />
      <Stack.Screen name={Screens.ViewSurvey} component={ViewSurveyScreen} />
    </Stack.Navigator>
  );
};

export default AdminStack;

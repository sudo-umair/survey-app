import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EnumeratorStack from './enumerator-stack';
import AuthStack from './auth-stack';
import { useAppSelector } from '@redux/store';
import { useAppDispatch } from '@redux/store';
import { clearRole } from '@redux/user-reducer';
import AdminStack from './admin-stack';

const AppNavigator = () => {
  const userRole = useAppSelector((state) => state.user.role);

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(clearRole());
  // }, []);

  return (
    <NavigationContainer>
      {userRole === null && <AuthStack />}
      {userRole === 'enumerator' && <EnumeratorStack />}
      {userRole === 'admin' && <AdminStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;

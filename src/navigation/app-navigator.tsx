import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EnumeratorStack from './enumerator-stack';
import AuthStack from './auth-stack';
import { useAppSelector } from '@redux/store';
import { useAppDispatch } from '@redux/store';
import AdminStack from './admin-stack';
import { adminResumeSession } from '@api/admin';
import { removeUser, setAdmin, setEnumerator } from '@redux/user-reducer';
import { enumeratorResumeSession } from '@api/enumerator';
import { handleAxiosError } from '@helpers/api';
import { showErrorToast, showSuccessToast } from '@helpers/toast-message';
import LoadingScreen from '@screens/loading-screen';

const AppNavigator = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const userState = useAppSelector((state) => state.user);
  const { role, user, isLoggedIn } = userState;

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function prepare() {
      setLoading(true);
      try {
        if (role === 'admin') {
          const response = await adminResumeSession({
            email: user.email,
            token: user.token,
          });
          if (response.status === 200) {
            showSuccessToast(response.data.message);
            dispatch(setAdmin(response.data.admin));
          }
        } else if (role === 'enumerator') {
          const response = await enumeratorResumeSession({
            email: user.email,
            token: user.token,
          });
          if (response.status === 200) {
            showSuccessToast(response.data.message);
            dispatch(setEnumerator(response.data.enumerator));
          }
        }
      } catch (error: any) {
        const errorResponse = handleAxiosError(error);
        console.error(errorResponse);
        showErrorToast(errorResponse.message);
        dispatch(removeUser());
      } finally {
        setLoading(false);
      }
    }
    if (isLoggedIn) prepare();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <NavigationContainer>
      {role === null && <AuthStack />}
      {role === 'enumerator' && <EnumeratorStack />}
      {role === 'admin' && <AdminStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;

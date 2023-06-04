import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import type { IAdminHomeScreenProps } from '@interfaces/screens';
import Container from '@components/ui/container';
import { COLORS } from '@common/colors';
import Button from '@components/ui/button';
import { FONT_SIZES } from '@common/fonts';
import { AdminScreens } from '@common/screens';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { removeUser } from '@redux/user-reducer';
import { SURVEY_COMPONENTS } from '@common/data';
import { ISurveyStats } from '@interfaces/common';
import { adminGetStats } from '@api/admin';
import { handleAxiosError } from '@helpers/api';
import { showErrorToast, showSuccessToast } from '@helpers/toast-message';

const HomeScreen = ({ navigation, route }: IAdminHomeScreenProps) => {
  const [stats, setStats] = useState<ISurveyStats>({
    totalComponentASurveys: 0,
    totalComponentBSurveys: 0,
    totalSurveys: 0,
    totalEnumerators: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    async function prepare() {
      setLoading(true);
      try {
        const response = await adminGetStats({
          email: user.email,
          token: user.token,
        });
        console.log(response.data);
        setStats(response.data.stats);
      } catch (error) {
        const errorResponse = handleAxiosError(error);
        console.error(errorResponse);
        showErrorToast(errorResponse.message);
      } finally {
        setLoading(false);
      }
    }
    prepare();
  }, []);

  const goToEnumeratorsList = () =>
    navigation.navigate(AdminScreens.ManageEnumerators);
  const goToSurveysList = () => navigation.navigate(AdminScreens.SurveysList);

  const onLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: logout,
        style: 'destructive',
      },
    ]);
  };

  const logout = () => {
    dispatch(removeUser());
  };

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Stats</Text>
      <View style={styles.row}>
        <Button
          title={`Enumerators\n${stats.totalEnumerators}`}
          buttonStyle={styles.rowButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
        <Button
          title={`Surveys\n${stats.totalSurveys}`}
          onPress={goToSurveysList}
          buttonStyle={styles.rowButton}
          buttonTextStyle={styles.buttonText}
          isLoading={loading}
        />
      </View>
      <View>
        <Button
          title={`${SURVEY_COMPONENTS.A}\n${stats.totalComponentASurveys}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
        <Button
          title={`${SURVEY_COMPONENTS.B}\n${stats.totalComponentBSurveys}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Manage Enumerators' onPress={goToEnumeratorsList} />
        <Button title='Logout' onPress={onLogout} />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginTop: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowButton: {
    width: '46%',
    aspectRatio: 1.5,
    marginHorizontal: 5,
  },
  colButton: {
    marginHorizontal: 5,
    marginBottom: 10,
    minHeight: 70,
  },
  buttonText: {
    fontSize: FONT_SIZES.EXTRA_LARGE,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
});

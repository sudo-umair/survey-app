import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import type { IAdminHomeScreenProps } from '@interfaces/screens';
import { COLORS } from '@common/colors';
import ScrollContainer from '@components/ui/scroll-container';
import Button from '@components/ui/button';
import { FONT_SIZES } from '@common/fonts';
import { AdminScreens } from '@common/screens';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { removeUser } from '@redux/user-reducer';
import { SURVEY_COMPONENTS } from '@common/data';
import { ISurveyStats } from '@interfaces/common';
import { adminGetStats } from '@api/admin';
import { handleAxiosError } from '@helpers/api';
import { showErrorToast } from '@helpers/toast-message';

const HomeScreen = ({ navigation, route }: IAdminHomeScreenProps) => {
  const [stats, setStats] = useState<ISurveyStats>({
    totalSurveys: 0,
    totalEnumerators: 0,
    surveys1: 0,
    surveys2: 0,
    surveys3: 0,
    surveys4: 0,
    surveys5: 0,
    surveys6: 0,
    surveys7: 0,
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
        // console.log(response.data);
        setStats(response.data.stats);
      } catch (error: any) {
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
    <ScrollContainer containerStyle={styles.rootContainer}>
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
          title={`${SURVEY_COMPONENTS.S1}\n${stats.surveys1}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
        <Button
          title={`${SURVEY_COMPONENTS.S2}\n${stats.surveys2}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
        <Button
          title={`${SURVEY_COMPONENTS.S3}\n${stats.surveys3}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
        <Button
          title={`${SURVEY_COMPONENTS.S4}\n${stats.surveys4}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
        <Button
          title={`${SURVEY_COMPONENTS.S5}\n${stats.surveys5}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
        <Button
          title={`${SURVEY_COMPONENTS.S6}\n${stats.surveys6}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
        <Button
          title={`${SURVEY_COMPONENTS.S7}\n${stats.surveys7}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
          isLoading={loading}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.button}
          title='Manage Enumerators'
          onPress={goToEnumeratorsList}
        />
        <Button buttonStyle={styles.button} title='Logout' onPress={onLogout} />
      </View>
    </ScrollContainer>
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
    marginVertical: 15,
  },
  button: {
    marginHorizontal: 5,
  },
});

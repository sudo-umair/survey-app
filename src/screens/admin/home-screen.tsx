import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { IAdminHomeScreenProps } from '@interfaces/screens';
import Container from '@components/ui/container';
import { COLORS } from '@common/colors';
import Button from '@components/ui/button';
import { FONT_SIZES } from '@common/fonts';
import { AdminScreens } from '@common/screens';
import { useAppDispatch } from '@redux/store';
import { removeUser } from '@redux/user-reducer';
import { SURVEY_COMPONENTS } from '@common/data';

const HomeScreen = ({ navigation, route }: IAdminHomeScreenProps) => {
  const dispatch = useAppDispatch();

  const goToEnumeratorsList = () =>
    navigation.navigate(AdminScreens.EnumeratorsList);
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
          title={`Enumerators\n${20}`}
          buttonStyle={styles.rowButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
        />
        <Button
          title={`Surveys\n${30}`}
          onPress={goToSurveysList}
          buttonStyle={styles.rowButton}
          buttonTextStyle={styles.buttonText}
        />
      </View>
      <View>
        <Button
          title={`${SURVEY_COMPONENTS.A}\n${33}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
        />
        <Button
          title={`${SURVEY_COMPONENTS.B}\n${33}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
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

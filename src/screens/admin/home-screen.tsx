import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { IAdminHomeScreenProps } from '@interfaces/screens';
import Container from '@components/ui/container';
import { COLORS } from '@common/colors';
import Button from '@components/ui/button';
import { FONT_SIZES } from '@common/fonts';
import { AdminScreens } from '@common/screens';

const HomeScreen = ({ navigation, route }: IAdminHomeScreenProps) => {
  const goToUsersList = () => navigation.navigate(AdminScreens.UsersList);
  const goToSurveysList = () => navigation.navigate(AdminScreens.SurveysList);

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Stats</Text>
      <View style={styles.row}>
        <Button
          title={`Users\n${20}`}
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
          title={`Component A: ${33}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
        />
        <Button
          title={`Component B: ${33}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
        />
        <Button
          title={`Component C: ${33}`}
          buttonStyle={styles.colButton}
          buttonTextStyle={styles.buttonText}
          dynamic={false}
          haptics={false}
        />
      </View>
      <Button
        title='Manage Users'
        onPress={goToUsersList}
        buttonStyle={[styles.colButton, styles.bottomContainer]}
      />
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
    gap: 5,
    marginBottom: 20,
  },
  rowButton: {
    width: '40%',
    aspectRatio: 1,
  },
  colButton: {
    marginBottom: 20,
    height: 80,
  },
  buttonText: {
    fontSize: FONT_SIZES.EXTRA_LARGE,
    textAlign: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
});

import { StyleSheet, Text } from 'react-native';
import React from 'react';
import type { IAdminHomeScreenProps } from '@interfaces/screens';
import Container from '@components/ui/container';
import { COLORS } from '@common/colors';
import Button from '@components/ui/button';
import { FONT_SIZES } from '@common/fonts';

const HomeScreen = ({ navigation, route }: IAdminHomeScreenProps) => {
  const onProceed = () => {
    console.log('Proceed');
  };

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Admin Home</Text>

      <Button
        title='Proceed'
        onPress={onProceed}
        buttonStyle={styles.button}
        buttonTextStyle={{ color: COLORS.WHITE }}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 10,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
});

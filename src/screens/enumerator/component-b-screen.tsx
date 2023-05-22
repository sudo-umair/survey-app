import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '@components/ui/container';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import Button from '@components/ui/button';
import { EnumeratorScreens } from '@common/screens';
import { IEnumeratorComponentBScreenProps } from '@interfaces/screens';

const ComponentBScreen = ({
  navigation,
  route,
}: IEnumeratorComponentBScreenProps) => {
  const onPress = () => {
    navigation.navigate(EnumeratorScreens.ComponentC);
  };

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Component B</Text>

      <Button
        title='Proceed'
        onPress={onPress}
        buttonStyle={styles.button}
        buttonTextStyle={{ color: COLORS.WHITE }}
      />
    </Container>
  );
};

export default ComponentBScreen;

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

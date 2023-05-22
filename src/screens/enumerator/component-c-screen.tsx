import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IEnumeratorComponentCScreenProps } from '@interfaces/screens';
import { EnumeratorScreens } from '@common/screens';
import Container from '@components/ui/container';
import Button from '@components/ui/button';
import { COLORS } from '@common/colors';
import { FONT_SIZES } from '@common/fonts';

const ComponentCScreen = ({
  navigation,
  route,
}: IEnumeratorComponentCScreenProps) => {
  const onPress = () => {
    // navigation.navigate(EnumeratorScreens.ComponentB);
    alert('Survey submitted!');
  };

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Component C</Text>

      <Button
        title='Submit Survey'
        onPress={onPress}
        buttonStyle={styles.button}
        buttonTextStyle={{ color: COLORS.WHITE }}
      />
    </Container>
  );
};

export default ComponentCScreen;

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

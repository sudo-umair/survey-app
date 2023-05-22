import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Container from '@components/ui/container';
import Button from '@components/ui/button';
import { COLORS } from '@common/colors';
import { FONT_SIZES } from '@common/fonts';
import { IEnumeratorComponentAScreenProps } from '@interfaces/screens';
import { EnumeratorScreens } from '@common/screens';

const ComponentAScreen = ({
  navigation,
  route,
}: IEnumeratorComponentAScreenProps) => {
  const onPress = () => {
    navigation.navigate(EnumeratorScreens.ComponentB);
  };

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Component A</Text>

      <Button
        title='Proceed'
        onPress={onPress}
        buttonStyle={styles.button}
        buttonTextStyle={{ color: COLORS.WHITE }}
      />
    </Container>
  );
};

export default ComponentAScreen;

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

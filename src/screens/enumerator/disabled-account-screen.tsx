import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import Container from '@components/ui/container';
import Lottie from 'lottie-react-native';
import DeniedAnimation from '@assets/animations/denied.json';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import { IEnumeratorDisabledAccountScreenProps } from '@interfaces/screens';
import Button from '@components/ui/button';
import { useAppDispatch } from '@redux/store';
import { removeUser } from '@redux/user-reducer';

const DisabledAccountScreen = ({
  navigation,
  route,
}: IEnumeratorDisabledAccountScreenProps) => {
  const animationRef = useRef<Lottie>(null);

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(removeUser());
  };

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Account Disabled</Text>
      <Lottie
        source={DeniedAnimation}
        autoPlay
        loop={true}
        style={styles.animation}
        ref={animationRef}
        autoSize
      />
      <Text style={styles.subtitle}>
        Your account has been disabled by an admin!
      </Text>
      <Button buttonStyle={styles.button} onPress={onLogout} title='Logout' />
    </Container>
  );
};

export default DisabledAccountScreen;

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
  },
  subtitle: {
    fontSize: FONT_SIZES.EXTRA_LARGE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.RED,
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
  },
  animation: {
    marginTop: 20,
    width: 200,
    aspectRatio: 1,
    alignSelf: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
});

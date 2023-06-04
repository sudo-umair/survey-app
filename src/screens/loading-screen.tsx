import { StyleSheet, Text } from 'react-native';
import React, { useRef } from 'react';
import Container from '@components/ui/container';
import Lottie from 'lottie-react-native';
import LoadingAnimation from '@assets/animations/loading.json';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';

const LoadingScreen = () => {
  const animationRef = useRef<Lottie>(null);
  return (
    <Container containerStyle={styles.rootContentContainer}>
      <Lottie
        source={LoadingAnimation}
        autoPlay
        loop={true}
        style={styles.animation}
        ref={animationRef}
        autoSize
      />
      <Text style={styles.title}>Loading</Text>
    </Container>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  rootContentContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    aspectRatio: 1,
    width: 250,
    alignSelf: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
  },
});

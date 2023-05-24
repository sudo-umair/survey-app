import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import Container from '@components/ui/container';
import Button from '@components/ui/button';
import { FontAwesome5 } from '@expo/vector-icons';
import { IAuthChooseRoleScreenProps } from '@interfaces/screens';
import { AuthScreens } from '@common/screens';

const ChooseRoleScreen = ({
  navigation,
  route,
}: IAuthChooseRoleScreenProps) => {
  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Choose Role</Text>
      <View style={styles.buttonContainer}>
        <Button
          title='Admin'
          onPress={() =>
            navigation.navigate(AuthScreens.Login, {
              role: 'admin',
            })
          }
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
        >
          <FontAwesome5 name='user-secret' size={30} color='white' />
        </Button>
        <Button
          title='Enumerator'
          onPress={() =>
            navigation.navigate(AuthScreens.Login, {
              role: 'enumerator',
            })
          }
          buttonStyle={styles.button}
          buttonTextStyle={styles.buttonText}
        >
          <FontAwesome5 name='user-alt' size={30} color='white' />
        </Button>
      </View>
    </Container>
  );
};

export default ChooseRoleScreen;

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
  buttonContainer: {
    marginTop: 40,
    rowGap: 20,
  },
  button: {
    height: 150,
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: FONT_SIZES.EXTRA_EXTRA_LARGE,
    marginTop: 10,
  },
});

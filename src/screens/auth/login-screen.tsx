import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import type { IAuthLoginScreenProps } from '@interfaces/screens';
import TextInput from '@components/ui/text-input';
import { COLORS } from '@common/colors';
import ScrollContainer from '@components/ui/scroll-container';
import { AntDesign } from '@expo/vector-icons';
import Button from '@components/ui/button';
import { AuthScreens } from '@common/screens';
import { FONT_SIZES } from '@common/fonts';
import { useAppDispatch } from '@redux/store';
import { setRole } from '@redux/user-reducer';
import Logo from '@assets/images/logo.png';

interface IEnumeratorRecord {
  email: string;
  password: string;
}

const LoginScreen = ({ navigation, route }: IAuthLoginScreenProps) => {
  const [record, setRecord] = useState<IEnumeratorRecord>({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const role = route.params?.role;

  const dispatch = useAppDispatch();

  const onChangeText = (text: string, key: keyof typeof record) => {
    setRecord((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const goToSignUpScreen = () => {
    navigation.navigate(AuthScreens.SignUp);
  };

  const onSubmit = () => {
    dispatch(setRole(role));
  };

  const checkInputs = () => {};

  return (
    <ScrollContainer
      contentContainerStyle={styles.rootContentContainer}
      containerStyle={styles.rootContainer}
      keyboardShouldPersistTaps='handled'
    >
      <Text style={styles.title}>
        {role === 'admin' ? 'Admin' : 'Enumerator'} Login
      </Text>

      <Image
        source={Logo}
        resizeMode='contain'
        resizeMethod='auto'
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={record.email}
          onChangeText={(text) => onChangeText(text, 'email')}
          keyboardType='email-address'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.row}>
          <TextInput
            value={record.password}
            onChangeText={(text) => onChangeText(text, 'password')}
            secureTextEntry={!showPassword}
            inputStyle={{
              width: '80%',
              marginVertical: 0,
              marginHorizontal: 0,
              borderWidth: 0,
            }}
          />
          {showPassword ? (
            <AntDesign
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.icon}
              name='eye'
              size={24}
              color='black'
            />
          ) : (
            <AntDesign
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.icon}
              name='eyeo'
              size={24}
              color='black'
            />
          )}
        </View>
      </View>
      <Button onPress={onSubmit} title='Log In' />
      {role === 'enumerator' && (
        <Text onPress={goToSignUpScreen} style={styles.link}>
          Not a user?
        </Text>
      )}
    </ScrollContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {},
  rootContentContainer: {
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
  logo: {
    width: '100%',
    height: 250,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: -30,
  },
  inputContainer: {
    marginVertical: 3,
  },
  label: {
    fontSize: FONT_SIZES.LARGE,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: COLORS.PRIMARY,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  icon: {
    marginHorizontal: 5,
  },
  link: {
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

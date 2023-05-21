import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import type { IEnumeratorLoginScreenProps } from '@interfaces/screens';
import TextInput from '@components/ui/text-input';
import { COLORS } from '@common/colors';
import ScrollContainer from '@components/ui/scroll-container';
import { CnicFormatter } from '@utils/formatters';
import { AntDesign } from '@expo/vector-icons';
import Button from '@components/ui/button';
import { EnumeratorScreens } from '@common/screens';
import { FONT_SIZES } from '@common/fonts';

interface IEnumeratorRecord {
  email: string;
  password: string;
}

const LoginScreen = ({ navigation, route }: IEnumeratorLoginScreenProps) => {
  const [record, setRecord] = useState<IEnumeratorRecord>({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onChangeText = (text: string, key: keyof typeof record) => {
    setRecord((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const onSubmit = () => {
    navigation.navigate(EnumeratorScreens.Home);
  };

  const checkInputs = () => {};

  return (
    <ScrollContainer
      contentContainerStyle={styles.rootContentContainer}
      containerStyle={styles.rootContainer}
      keyboardShouldPersistTaps='handled'
    >
      <Text style={styles.title}>Log In</Text>
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
      <Text
        onPress={() => navigation.navigate(EnumeratorScreens.SignUp)}
        style={styles.link}
      >
        Not a user?
      </Text>
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

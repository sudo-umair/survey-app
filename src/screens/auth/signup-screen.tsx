import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import type { IAuthSignupScreenProps } from '@interfaces/screens';
import TextInput from '@components/ui/text-input';
import { COLORS } from '@common/colors';
import { IEnumeratorSignupRecord } from '@interfaces/common';
import ScrollContainer from '@components/ui/scroll-container';
import { CnicFormatter } from '@utils/formatters';
import { AntDesign } from '@expo/vector-icons';
import Button from '@components/ui/button';
import { AuthScreens } from '@common/screens';
import { FONT_SIZES } from '@common/fonts';
import { checkSignupInputs } from '@utils/input-checks';
import { showErrorToast, showSuccessToast } from '@helpers/toast-message';
import { enumeratorSignup } from '@api/enumerator';
import { handleAxiosError } from '@helpers/api';

const SignupScreen = ({ navigation, route }: IAuthSignupScreenProps) => {
  const [record, setRecord] = useState<IEnumeratorSignupRecord>({
    enumeratorId: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    cnic: '',
    age: '',
    address: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onChangeText = (text: string, key: keyof typeof record) => {
    setRecord((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const onSubmit = async () => {
    if (checkSignupInputs(record)) {
      setLoading(true);
      try {
        const response = await enumeratorSignup(record);
        // console.log(response.data);
        showSuccessToast(response.data.message);
        if (response.status === 201) {
          navigation.navigate(AuthScreens.Login, {
            role: 'enumerator',
          });
        }
      } catch (error: any) {
        const errorResponse = handleAxiosError(error);
        console.error(errorResponse);
        showErrorToast(errorResponse.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const goToLoginScreen = () =>
    navigation.navigate(AuthScreens.Login, {
      role: 'enumerator',
    });

  return (
    <ScrollContainer
      contentContainerStyle={styles.rootContentContainer}
      containerStyle={styles.rootContainer}
      keyboardShouldPersistTaps='handled'
    >
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enumerator ID</Text>
        <TextInput
          value={record.enumeratorId}
          onChangeText={(text) => onChangeText(text, 'enumeratorId')}
          autoCapitalize='words'
          autoFocus
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          value={record.firstName}
          onChangeText={(text) => onChangeText(text, 'firstName')}
          autoCapitalize='words'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          value={record.lastName}
          onChangeText={(text) => onChangeText(text, 'lastName')}
          autoCapitalize='words'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          value={record.age}
          onChangeText={(text) => onChangeText(text, 'age')}
          keyboardType='number-pad'
          maxLength={2}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={record.email}
          onChangeText={(text) => onChangeText(text, 'email')}
          keyboardType='email-address'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CNIC</Text>
        <TextInput
          value={record.cnic}
          placeholder='XXXXX-XXXXXXX-X'
          onChangeText={(text) => onChangeText(text, 'cnic')}
          keyboardType='number-pad'
          maxLength={15}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile</Text>
        <TextInput
          value={record.mobile}
          onChangeText={(text) => onChangeText(text, 'mobile')}
          keyboardType='number-pad'
          maxLength={11}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          value={record.address}
          onChangeText={(text) => onChangeText(text, 'address')}
          autoCapitalize='words'
          multiline
          numberOfLines={2}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={record.password}
          onChangeText={(text) => onChangeText(text, 'password')}
          secureTextEntry={!showPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.row}>
          <TextInput
            value={record.confirmPassword}
            onChangeText={(text) => onChangeText(text, 'confirmPassword')}
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
      <Button isLoading={loading} onPress={onSubmit} title='Sign Up' />
      <Text onPress={goToLoginScreen} style={styles.link}>
        Already a user?
      </Text>
    </ScrollContainer>
  );
};

export default SignupScreen;

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

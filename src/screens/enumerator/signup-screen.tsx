import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import type { IEnumeratorSignupScreenProps } from '@interfaces/screens';
import TextInput from '@components/ui/text-input';
import { COLORS } from '@common/colors';
import { IEnumerator } from '@interfaces/common';
import ScrollContainer from '@components/ui/scroll-container';
import { CnicFormatter } from '@utils/formatters';
import { AntDesign } from '@expo/vector-icons';
import Button from '@components/ui/button';
import { EnumeratorScreens } from '@common/screens';

interface IEnumeratorRecord extends IEnumerator {
  confirmPassword: string;
}

const SignupScreen = ({ navigation, route }: IEnumeratorSignupScreenProps) => {
  const [record, setRecord] = useState<IEnumeratorRecord>({
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

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onChangeText = (text: string, key: keyof typeof record) => {
    setRecord((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const onSubmit = () => {
    navigation.navigate(EnumeratorScreens.Login);
  };

  const checkInputs = () => {};

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
          keyboardType='number-pad'
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
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={record.email}
          onChangeText={(text) => onChangeText(text, 'email')}
          keyboardType='email-address'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={record.password}
          onChangeText={(text) => onChangeText(text, 'password')}
          secureTextEntry={showPassword}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.row}>
          <TextInput
            value={record.confirmPassword}
            onChangeText={(text) => onChangeText(text, 'confirmPassword')}
            secureTextEntry={showPassword}
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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile</Text>
        <TextInput
          value={record.mobile}
          onChangeText={(text) => onChangeText(text, 'mobile')}
          keyboardType='number-pad'
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
        <Text style={styles.label}>Age</Text>
        <TextInput
          value={record.age}
          onChangeText={(text) => onChangeText(text, 'age')}
          keyboardType='number-pad'
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
      <Button onPress={onSubmit} title='Sign Up' />
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
    fontSize: 30,
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
    fontSize: 16,
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
});

import { StyleSheet, Text, View } from 'react-native';
import React, { Fragment, useMemo, useState } from 'react';
import { IViewSurveyItemProps } from '@interfaces/components';
import { COLORS } from '@common/colors';
import Container from '../ui/container';
import { FONT_SIZES } from '@common/fonts';
import TextInput from '../ui/text-input';
import RadioGroup from 'react-native-radio-buttons-group';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Button from '../ui/button';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { dateFormatter, timeFormatter } from '@utils/formatters';

const ViewSurveyItem: React.FC<IViewSurveyItemProps> = ({ index, item }) => {
  const radioOptions =
    useMemo(() => {
      return item.options?.map((option) => ({
        id: option,
        label: option,
        value: option,
      }));
    }, [item.options]) ?? [];

  return (
    <Container containerStyle={styles.container}>
      <Text style={styles.question}>
        <Text style={styles.questionId}>{item.questionId}.</Text>{' '}
        {item.question}
      </Text>
      {(item.questionType === 'text' ||
        item.questionType === 'number' ||
        item.questionType === 'text-area') && (
        <TextInput
          onChangeText={(text) => {}}
          inputStyle={styles.inputStyle}
          value={item.answer}
          autoFocus={index === 0}
          autoCapitalize={'words'}
          keyboardType={item.keyboardType ?? 'default'}
          multiline={item.questionType === 'text-area'}
          numberOfLines={item.questionType === 'text-area' ? 2 : 1}
          maxLength={item.maxLength ?? 100}
        />
      )}
      {item.questionType === 'radio' && (
        <RadioGroup
          containerStyle={styles.radioGroupContainer}
          radioButtons={radioOptions}
          selectedId={item.answer}
          layout='column'
        />
      )}
      {item.questionType === 'radio-text' && (
        <Fragment>
          <RadioGroup
            containerStyle={styles.radioGroupContainer}
            radioButtons={radioOptions}
            selectedId={
              item.options?.includes(item.answer)
                ? item.answer
                : 'Other (Specify)'
            }
            layout='column'
          />
          {!item.options?.includes(item.answer) && (
            <TextInput
              value={item.answer}
              onChangeText={(text) => {}}
              inputStyle={styles.inputStyle}
              keyboardType={item.keyboardType ?? 'default'}
              autoCapitalize='words'
            />
          )}
        </Fragment>
      )}
      {(item.questionType === 'date' || item.questionType === 'time') && (
        <Button
          buttonStyle={styles.inputStyle}
          title={
            item.questionType === 'date'
              ? dateFormatter(item.answer)
              : timeFormatter(item.answer)
          }
        />
      )}
      {item.questionType === 'picker' && (
        <Picker
          selectedValue={item.answer ?? item.options?.[0] ?? ''}
          mode='dropdown'
          style={styles.inputStyle}
          dropdownIconColor={COLORS.PRIMARY}
          dropdownIconRippleColor={COLORS.PRIMARY}
          itemStyle={{ color: COLORS.PRIMARY, borderWidth: 2 }}
        >
          {item.options?.map((option) => (
            <Picker.Item
              key={option}
              label={option}
              value={option}
              color={COLORS.PRIMARY}
            />
          ))}
        </Picker>
      )}
      {item.questionType === 'checkbox' && (
        <View style={styles.checkboxContainer}>
          {item.options?.map((option, optionIndex) => (
            <View style={styles.checkboxRow} key={optionIndex}>
              <Checkbox
                style={styles.checkbox}
                key={optionIndex}
                value={item.answer?.includes(option) ?? false}
                color={COLORS.PRIMARY}
              />
              <Text style={styles.checkboxText}>{option}</Text>
            </View>
          ))}
        </View>
      )}
      {item.questionType === 'checkbox-text' && (
        <View style={styles.checkboxContainer}>
          <Fragment>
            {item.options?.map((option, optionIndex) => (
              <View style={styles.checkboxRow} key={optionIndex}>
                <Checkbox
                  style={styles.checkbox}
                  key={optionIndex}
                  value={item.answer?.includes(option) ?? false}
                  color={COLORS.PRIMARY}
                />
                <Text style={styles.checkboxText}>{option}</Text>
              </View>
            ))}
            {item.answer.includes('Other (Specify)') && (
              <TextInput
                value={item.answer
                  .split(',')
                  .filter((x) => item.options?.includes(x) === false)
                  .join(',')}
                onChangeText={(text) => {}}
                inputStyle={styles.inputStyle}
              />
            )}
          </Fragment>
        </View>
      )}
    </Container>
  );
};

export default React.memo(ViewSurveyItem);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  question: {
    fontSize: FONT_SIZES.MEDIUM,
    marginLeft: 5,
  },
  questionId: {
    fontWeight: 'bold',
  },
  inputStyle: {
    marginHorizontal: 5,
  },
  radioGroupContainer: {
    marginHorizontal: -5,
    marginBottom: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  checkboxContainer: {
    marginHorizontal: 5,
  },
  checkboxRow: {
    flexDirection: 'row',
  },
  checkbox: {
    marginVertical: 5,
  },
  checkboxText: {
    fontSize: FONT_SIZES.MEDIUM,
    marginVertical: 5,
    marginLeft: 15,
  },
});

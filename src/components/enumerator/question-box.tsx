import { StyleSheet, Text, View } from 'react-native';
import React, { Fragment, useMemo, useState } from 'react';
import { IQuestionBoxProps } from '@interfaces/components';
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
import * as Haptics from 'expo-haptics';

const QuestionBox: React.FC<IQuestionBoxProps> = ({
  index,
  item,
  onChange,
}) => {
  const radioOptions =
    useMemo(() => {
      return item.options?.map((option) => ({
        id: option,
        label: option,
        value: option,
      }));
    }, [item.options]) ?? [];

  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedId, setSelectedId] = useState<string>('');

  const onCheckBoxPress = (option: string) => {
    Haptics.selectionAsync();
    const newAnswer = item.answer ? item.answer.split(',') : [];
    if (newAnswer.includes(option)) {
      const index = newAnswer.indexOf(option);
      if (index > -1) {
        newAnswer.splice(index, 1);
      }
    } else {
      newAnswer.push(option);
    }
    onChange(newAnswer.join(','), index);
  };

  // for questionType = radio-text
  const onRadioButtonPress = (text: string) => {
    setSelectedId(text);
    if (text.toLowerCase() === 'Other (Specify)'.toLowerCase()) {
      onChange('', index);
    } else {
      onChange(text, index);
    }
    Haptics.selectionAsync();
  };

  return (
    <Fragment>
      <Container containerStyle={styles.container}>
        <Text style={styles.question}>
          <Text style={styles.questionId}>{item.questionId}.</Text>{' '}
          {item.question}
        </Text>
        {item.subtext && <Text style={styles.subtext}>{item.subtext}</Text>}
        {(item.questionType === 'text' ||
          item.questionType === 'number' ||
          item.questionType === 'text-area') && (
          <TextInput
            onChangeText={(text) => onChange(text, index)}
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
            onPress={(text) => {
              onChange(text, index);
              Haptics.selectionAsync();
            }}
            selectedId={item.answer}
            layout='column'
          />
        )}
        {item.questionType === 'radio-text' && (
          <Fragment>
            <RadioGroup
              containerStyle={styles.radioGroupContainer}
              radioButtons={radioOptions}
              onPress={(text) => onRadioButtonPress(text)}
              selectedId={selectedId === '' ? item.answer : selectedId}
              layout='column'
            />
            {selectedId?.toLowerCase() === 'Other (Specify)'.toLowerCase() && (
              <TextInput
                value={item.answer}
                onChangeText={(text) => onChange(text, index)}
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
            onPress={() => setShowDateTimePicker(true)}
          />
        )}
        {item.questionType === 'picker' && (
          <Picker
            selectedValue={item.answer ?? item.options?.[0] ?? ''}
            mode='dialog'
            onValueChange={(itemValue) => onChange(itemValue, index)}
            style={styles.inputStyle}
            dropdownIconColor={COLORS.PRIMARY}
            dropdownIconRippleColor={COLORS.PRIMARY}
            itemStyle={{ color: COLORS.PRIMARY }}
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
                  onValueChange={() => onCheckBoxPress(option)}
                />
                <Text
                  onPress={() => onCheckBoxPress(option)}
                  style={styles.checkboxText}
                >
                  {option}
                </Text>
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
                    onValueChange={() => onCheckBoxPress(option)}
                  />
                  <Text
                    onPress={() => onCheckBoxPress(option)}
                    style={styles.checkboxText}
                  >
                    {option}
                  </Text>
                </View>
              ))}
              {item.answer.includes('Other (Specify)') && (
                <TextInput
                  value={item.answer
                    .split(',')
                    .filter((x) => item.options?.includes(x) === false)
                    .join(',')}
                  onChangeText={(text) => {
                    const newAnswer = item.answer
                      .split(',')
                      .filter((x) => item.options?.includes(x));
                    newAnswer.push(text);
                    onChange(newAnswer.join(','), index);
                  }}
                  inputStyle={styles.inputStyle}
                  keyboardType={item.keyboardType ?? 'default'}
                  autoCapitalize='words'
                />
              )}
            </Fragment>
          </View>
        )}
      </Container>
      {showDateTimePicker && (
        <RNDateTimePicker
          value={new Date()}
          mode={item.questionType === 'time' ? 'time' : 'date'}
          display='default'
          onChange={(event, selectedDate) => {
            setShowDateTimePicker(false);
            if (selectedDate) {
              // event.type === 'dismissed' && onChange('', index);
              event.type === 'set' && onChange(selectedDate.toString(), index);
            }
          }}
          maximumDate={new Date()}
        />
      )}
    </Fragment>
  );
};

export default React.memo(QuestionBox);

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
  subtext: {
    marginVertical: 2,
    fontSize: FONT_SIZES.SMALL,
    marginLeft: 5,
    color: COLORS.DARK_GRAY,
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

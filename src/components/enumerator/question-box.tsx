import { StyleSheet, Text } from 'react-native';
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

  return (
    <Fragment>
      <Container containerStyle={styles.container}>
        <Text style={styles.question}>
          <Text style={styles.questionId}>{item.questionId}.</Text>{' '}
          {item.question}
        </Text>
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
              onPress={(text) => {
                setSelectedId(text);
                if (text.toLowerCase() === 'Other (Specify)'.toLowerCase()) {
                  onChange('', index);
                } else {
                  onChange(text, index);
                }
                Haptics.selectionAsync();
              }}
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
            onPress={() => {
              setShowDateTimePicker(true);
            }}
          />
        )}
        {item.questionType === 'picker' && (
          <Picker
            selectedValue={item.answer ?? item.options?.[0] ?? ''}
            mode='dropdown'
            onValueChange={(itemValue) => onChange(itemValue, index)}
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
      </Container>
      {showDateTimePicker && (
        <RNDateTimePicker
          value={new Date()}
          mode={item.questionType === 'time' ? 'time' : 'date'}
          display='default'
          onChange={(event, selectedDate) => {
            setShowDateTimePicker(false);
            if (selectedDate) {
              event.type === 'dismissed' && onChange('', index);
              event.type === 'set' && onChange(selectedDate.toString(), index);
            }
          }}
          maximumDate={new Date()}
        />
      )}
    </Fragment>
  );
};

export default QuestionBox;

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
});

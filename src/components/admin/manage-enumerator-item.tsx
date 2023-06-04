import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { IManageEnumeratorItemProps } from '@interfaces/components';
import { COLORS } from '@common/colors';
import { FONT_SIZES } from '@common/fonts';
import { dateFormatter } from '@utils/formatters';
import Button from '@components/ui/button';

const ManageEnumeratorItem: React.FC<IManageEnumeratorItemProps> = ({
  enumerator,
  toggleEnumerator,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handlePress = () => {
    setLoading(true);
    toggleEnumerator(enumerator.email);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {enumerator.name}</Text>
      <Text style={styles.label}>
        Enumerator ID: {enumerator.enumeratorId || 'EN-01'}
      </Text>
      <Text style={styles.label}>
        Email: {enumerator.email || 'test@google.com'}
      </Text>
      <Text style={styles.label}>
        Cnic: {enumerator.cnic || '12345-1234567-1'}
      </Text>
      <Text style={styles.label}>
        Phone: {enumerator.mobile || '0300-1234567'}
      </Text>
      <Text style={styles.label}>
        Date Joined: {dateFormatter(new Date().toISOString())}
      </Text>
      <Button
        title={enumerator.isDisabled ? 'Enable' : 'Disable'}
        onPress={handlePress}
        isLoading={loading}
        dynamic={true}
        buttonStyle={[
          styles.button,
          enumerator.isDisabled ? styles.enableButton : styles.disableButton,
        ]}
      />
    </View>
  );
};

export default React.memo(ManageEnumeratorItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
    shadowRadius: 10,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.LARGE,
    marginBottom: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: FONT_SIZES.MEDIUM,
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    marginHorizontal: 0,
  },
  enableButton: {
    backgroundColor: COLORS.GREEN,
  },
  disableButton: {
    backgroundColor: COLORS.RED,
  },
});

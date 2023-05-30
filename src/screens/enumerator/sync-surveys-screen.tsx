import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import Container from '@components/ui/container';
import { IEnumeratorSyncSurveysScreenProps } from '@interfaces/screens';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import { getData, removeData } from '@helpers/async-storage';
import Button from '@components/ui/button';
import { ISurveyPayload } from '@interfaces/common';
import { useNetInfo } from '@react-native-community/netinfo';
import SyncSurveyItem from '../../components/enumerator/sync-survey-item';
import { showSuccessToast } from '@helpers/toast-message';

const SyncSurveysScreen = ({
  navigation,
  route,
}: IEnumeratorSyncSurveysScreenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [offlineSurveys, setOfflineSurveys] = useState<ISurveyPayload[]>([]);

  const { isInternetReachable } = useNetInfo();

  useEffect(() => {
    async function prepare() {
      setLoading(true);
      const response = await getData<ISurveyPayload[]>('surveys');
      if (response) {
        // console.log('length', response.length);
        setOfflineSurveys(response);
      } else {
        setOfflineSurveys([]);
      }
      setLoading(false);
    }
    prepare();
  }, [refreshing]);

  const clearSurveys = async () => {
    Alert.alert(
      'Clear Surveys',
      'Are you sure you want to clear all surveys from offline storage?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: () => clearSurveyStorage(),
        },
      ],
      { cancelable: false }
    );
  };

  const clearSurveyStorage = async () => {
    try {
      const response = await removeData('surveys');
      if (response) {
        setRefreshing((prev) => !prev);
      }
      showSuccessToast('Surveys Cleared Successfully!');
    } catch (error) {
      console.warn(error);
    }
  };

  const syncSurveys = async () => {
    // api call to sync surveys
    showSuccessToast('Syncing Surveys...');
  };

  return (
    <Container containerStyle={styles.rootContentContainer}>
      <Text style={styles.title}>Sync Surveys</Text>
      <FlatList
        data={offlineSurveys}
        directionalLockEnabled
        renderItem={({ item }) => {
          return <SyncSurveyItem survey={item} />;
        }}
        ListEmptyComponent={() => (
          <Text style={styles.label}>No Surveys found in Offline Storage!</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        contentContainerStyle={styles.listContentContainer}
        refreshing={loading}
        onRefresh={() => setRefreshing((prev) => !prev)}
      />
      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={styles.button}
          onPress={clearSurveys}
          title='Clear Surveys'
          disabled={offlineSurveys.length === 0}
        />
        <Button
          buttonStyle={styles.button}
          onPress={syncSurveys}
          title='Sync Surveys'
          disabled={!isInternetReachable || offlineSurveys.length === 0}
        />
      </View>
    </Container>
  );
};

export default SyncSurveysScreen;

const styles = StyleSheet.create({
  rootContentContainer: {
    padding: 10,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginTop: 10,
  },
  list: {
    marginBottom: 10,
  },
  listContentContainer: {
    paddingVertical: 10,
  },
  label: {
    marginTop: 50,
    fontSize: FONT_SIZES.LARGE,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

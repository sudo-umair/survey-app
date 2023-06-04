import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ISurveyPayload } from '@interfaces/common';
import Container from '@components/ui/container';
import SurveyItem from '@components/admin/survey-item';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import { adminGetSurveys } from '@api/admin';
import { useAppSelector } from '@redux/store';
import { handleAxiosError } from '@helpers/api';
import { showErrorToast } from '@helpers/toast-message';

const SurveysListScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [surveysList, setSurveysList] = useState<ISurveyPayload[]>([]);

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    async function prepare() {
      setLoading(true);
      try {
        const response = await adminGetSurveys({
          email: user.email,
          token: user.token,
        });
        if (response.status === 200) {
          console.log(response.data.surveys);
          setSurveysList(response.data.surveys.reverse());
        }
      } catch (error) {
        const errorResponse = handleAxiosError(error);
        console.error(errorResponse);
        showErrorToast(errorResponse.message);
      } finally {
        setLoading(false);
      }
    }
    prepare();
  }, [refreshing]);

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Surveys</Text>
      <FlatList
        data={surveysList}
        directionalLockEnabled
        renderItem={({ item }) => {
          return <SurveyItem survey={item} />;
        }}
        ListEmptyComponent={() => (
          <Text style={styles.label}>No Surveys found!</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        contentContainerStyle={styles.listContentContainer}
        refreshing={loading}
        onRefresh={() => setRefreshing((prev) => !prev)}
      />
    </Container>
  );
};

export default SurveysListScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 10,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.PRIMARY,
    marginTop: 10,
    marginBottom: 20,
  },
  list: {
    // marginBottom: 10,
  },
  listContentContainer: {
    paddingVertical: 10,
  },
  label: {
    marginTop: 50,
    fontSize: FONT_SIZES.LARGE,
    textAlign: 'center',
  },
});

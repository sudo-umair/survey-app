import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ISurveyPayload } from '@interfaces/common';
import Container from '@components/ui/container';
import SurveyItem from '@components/admin/survey-item';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';

const SurveysListScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [surveysList, setSurveysList] = useState<ISurveyPayload[]>([]);

  useEffect(() => {
    async function prepare() {
      setLoading(true);
      //api call to get enumerators
      setSurveysList([]);
      setLoading(false);
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

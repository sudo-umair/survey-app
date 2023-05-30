import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '@components/ui/container';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import { IAdminManageEnumeratorsScreenProps } from '@interfaces/screens';
import { TestEnumerators } from '@common/test-data';
import ManageEnumeratorItem from '@components/admin/manage-enumerator-item';
import { IUserState } from '@interfaces/redux';

const ManageEnumeratorsScreen = ({
  navigation,
  route,
}: IAdminManageEnumeratorsScreenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [enumeratorsList, setEnumeratorsList] = useState<IUserState['user'][]>(
    []
  );

  useEffect(() => {
    async function prepare() {
      setLoading(true);
      //api call to get enumerators
      setEnumeratorsList(TestEnumerators);
      setLoading(false);
    }
    prepare();
  }, [refreshing]);

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Manage Enumerators</Text>
      <FlatList
        data={enumeratorsList}
        directionalLockEnabled
        renderItem={({ item }) => {
          return <ManageEnumeratorItem enumerator={item} />;
        }}
        ListEmptyComponent={() => (
          <Text style={styles.label}>No Enumerators Registered Yet!</Text>
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

export default ManageEnumeratorsScreen;

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

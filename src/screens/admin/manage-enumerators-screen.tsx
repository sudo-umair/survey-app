import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '@components/ui/container';
import { FONT_SIZES } from '@common/fonts';
import { COLORS } from '@common/colors';
import { IAdminManageEnumeratorsScreenProps } from '@interfaces/screens';
import ManageEnumeratorItem from '@components/admin/manage-enumerator-item';
import { IEnumeratorState } from '@interfaces/redux';
import { adminListEnumerator, adminToggleEnumerator } from '@api/admin';
import { useAppSelector } from '@redux/store';
import { handleAxiosError } from '@helpers/api';
import { showErrorToast, showSuccessToast } from '@helpers/toast-message';

const ManageEnumeratorsScreen = ({
  navigation,
  route,
}: IAdminManageEnumeratorsScreenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [enumeratorsList, setEnumeratorsList] = useState<IEnumeratorState[]>(
    []
  );

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    async function prepare() {
      setLoading(true);
      try {
        const response = await adminListEnumerator({
          email: user.email,
          token: user.token,
        });
        setEnumeratorsList(response.data.enumerators);
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

  const toggleEnumerator = async (enumeratorEmail: string) => {
    try {
      const response = await adminToggleEnumerator({
        email: user.email,
        token: user.token,
        enumeratorEmail,
      });
      // console.log(response.data);
      if (response.status === 200) {
        setRefreshing((prev) => !prev);
        showSuccessToast(response.data.message);
      }
    } catch (error) {
      const errorResponse = handleAxiosError(error);
      console.error(errorResponse);
      showErrorToast(errorResponse.message);
    }
  };

  return (
    <Container containerStyle={styles.rootContainer}>
      <Text style={styles.title}>Manage Enumerators</Text>
      <FlatList
        data={enumeratorsList}
        directionalLockEnabled
        renderItem={({ item }) => {
          return (
            <ManageEnumeratorItem
              enumerator={item}
              toggleEnumerator={toggleEnumerator}
            />
          );
        }}
        ListEmptyComponent={() => (
          <Text style={styles.label}>
            {loading ? 'Loading...' : 'No Enumerators Registered Yet!'}
          </Text>
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
    marginTop: 60,
    fontSize: FONT_SIZES.LARGE,
    textAlign: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppNavigator from '@navigation/app-navigator';
import { store, persistor } from '@redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { COLORS } from '@common/colors';
import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect } from 'react';
import { showErrorToast, showSuccessToast } from '@helpers/toast-message';

export default function App() {
  const { isInternetReachable } = useNetInfo();

  useEffect(() => {
    if (isInternetReachable !== null) {
      if (isInternetReachable) showSuccessToast('Internet is connected');
      else if (!isInternetReachable) showErrorToast('Internet is disconnected');
    }
  }, [isInternetReachable]);

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
      <StatusBar backgroundColor={COLORS.PRIMARY} style='light' />
      <Toast
        position='bottom'
        visibilityTime={2000}
        keyboardOffset={10}
        bottomOffset={10}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

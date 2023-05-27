import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async <T>(key: string, value: T): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.info('Data successfully saved in AsyncStorage');
    return true;
  } catch (e) {
    console.warn(e);
    return false;
  }
};

export const getData = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.warn(e);
    return null;
  }
};

export const removeData = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    console.info('Data successfully removed from AsyncStorage');
    return true;
  } catch (e) {
    console.warn(e);
    return false;
  }
};

export const appendData = async <T>(key: string, value: T) => {
  try {
    const previousData = await getData<T[]>(key) ?? [];
    const newData = previousData.concat(value);
    const response = await storeData(key, newData);
    return response;
  } catch (e) {
    console.warn(e);
    return false;
  }
};

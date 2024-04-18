// Permissions import
import * as Location from 'expo-location';

const getPermission = async () => {
  return await Location.requestForegroundPermissionsAsync();
}

const getLocation = async () => {
  return await Location.getCurrentPositionAsync({});
}

export { getPermission, getLocation };
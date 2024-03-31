import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './../screens/AuthScreens/LoginScreen';
import RegisterEmailScreen from './../screens/AuthScreens/RegisterEmailScreen';
import ConfirmEmailScreen from './../screens/AuthScreens/ConfirmEmailScreen';
import SetPasswordScreen from './../screens/AuthScreens/SetPasswordScreen';
import SetUserScreen from './../screens/AuthScreens/SetUserScreen';
import NewUserScreen from './../screens/AuthScreens/NewUserScreen';

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="register" component={RegisterEmailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="confirm_email" component={ConfirmEmailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="set_password" component={SetPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="set_user" component={SetUserScreen} options={{ headerShown: false }} />
      <Stack.Screen name="new_user" component={NewUserScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
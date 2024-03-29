import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import MainNavigator from "./src/navigation/MainNavigator";

import LoginScreen from "./src/screens/AuthScreens/LoginScreen";
import RegisterEmailScreen from "./src/screens/AuthScreens/RegisterEmailScreen";
import ConfirmEmailScreen from "./src/screens/AuthScreens/ConfirmEmailScreen";
import SetPasswordScreen from "./src/screens/AuthScreens/SetPasswordScreen";
import SetUserScreen from "./src/screens/AuthScreens/SetUserScreen";
import NewUserScreen from "./src/screens/AuthScreens/NewUserScreen";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
        {/* <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={RegisterEmailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="confirm_email" component={ConfirmEmailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="set_password" component={SetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="set_user" component={SetUserScreen} options={{ headerShown: false }} />
        <Stack.Screen name="new_user" component={NewUserScreen} options={{ headerShown: false }} /> */}
        <MainNavigator></MainNavigator>
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../styles/Colors";

// Screens
import HomeScreen from "./../screens/AppScreens/HomeScreen";
// import ReviewAnalysisScreen from "./../screens/AppScreens/ReviewAnalysisScreen";
import SettingsScreen from "./../screens/AppScreens/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer
      independent={true}
      initialState={{ index: 0, routes: [{ name: "Home" }] }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName : string = "";

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Settings":
                iconName = "settings";
                break;
              default:
              case "Settings":
                iconName = "help";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.gray,
          tabBarLabel: () => null
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} ></Tab.Screen>
        {/* <Tab.Screen name="Review_analysis" component={ReviewAnalysisScreen} options={{ headerShown: false }} ></Tab.Screen> */}
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

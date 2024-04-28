import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../styles/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import HomeScreen from "./../screens/AppScreens/HomeScreen";
import AnalysisScreen from "./../screens/AppScreens/AnalysisScreen";
import DoAnalysisScreen from "./../screens/AppScreens/DoAnalysisScreen";

import SettingsScreen from "./../screens/AppScreens/SettingsScreen";

const HomeStack: any = createNativeStackNavigator();

const HomeStackScreen: React.FC = () => {
  /* Screens in stack */
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="DoAnalysis"
        component={DoAnalysisScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

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
            let iconName: string = "";

            switch (route.name) {
              case "HomeStack":
                iconName = "home";
                break;
              default:
                iconName = "home";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.gray,
          tabBarLabel: () => null,
          headerShown: false,
        })}
      >
        {/* List of elements in the tab bar */}
        <Tab.Screen name="HomeStack" component={HomeStackScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

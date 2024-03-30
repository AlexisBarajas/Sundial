import {
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return(
    <View>
      <StatusBar style="dark" />
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;

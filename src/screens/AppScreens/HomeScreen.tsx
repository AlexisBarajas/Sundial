import { Text, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
// import MapView from "react-native-maps";
// Components
import ButtonWithIcon from "../../components/ButtonWithIcon";
// Styles
import AppStyles from "../../styles/AppStyles";

const HomeScreen = () => {
  const username = "John Doe";
  const city = "New York";
  const temperature = "25";

  return (
    <View style={AppStyles.container}>
      <StatusBar style="dark" />
      <Text style={AppStyles.headerTitle}>Buenos dias, {username}.</Text>
      <View style={AppStyles.headerCard}>
        <ImageBackground
          source={require("./../../img/app-images/header-home.jpg")}
          style={AppStyles.backgroundCardImage}
        >
          <View style={AppStyles.headerCardContent}>
            <Text style={AppStyles.headerCardContentTextCity}>{city}</Text>
            <Text style={AppStyles.headerCardContentTextTemperature}>
              {temperature}°
            </Text>
          </View>
        </ImageBackground>
      </View>

      <ButtonWithIcon
        icon="search"
        title="Realizar analisis de zona"
        onPress={() => console.log("Search")}
        ></ButtonWithIcon>
    </View>
  );
};

export default HomeScreen;

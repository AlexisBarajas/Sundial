import { Text, View, ImageBackground, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
// import MapView from "react-native-maps";
// Components
import ButtonWithIcon from "../../components/ButtonWithIcon";
import ButtonWithBorder from "../../components/ButtonWithBorder";
// Styles
import AppStyles from "../../styles/AppStyles";

const HomeScreen = () => {
  const errorImage = require("./../../img/app-images/error-message.png");
  const username: string = "Juan Perez";
  const city: string = "New York";
  const temperature: number = 25;

  type DataType = {
    id: number;
    title: string;
    desc: string;
  };
  const data: DataType[] = [
  ];

  return (
    <ScrollView style={AppStyles.container}>
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
        icon="compass"
        title="Realizar analisis de zona"
        onPress={() => console.log("Search")}
      />

      <View>
        <View style={AppStyles.sectionHeader}>
          <Text style={AppStyles.sectionHeaderTitle}>Ultimos analisis</Text>
          <ButtonWithBorder
            title="Ver mas"
            onPress={() => console.log("Search")}
          />
        </View>

        {data.length > 0 ? (
          data.map((item, index) => <Text>{index}</Text>)
        ) : (
          <CardError />
        )}
      </View>
    </ScrollView>
  );
};

const CardError = () => {
  const errorImage = require("./../../img/app-images/error-message.png");
  return (
    <View style={AppStyles.errorCard}>
      <Image source={errorImage} style={AppStyles.noDataImage} />
      <Text style={AppStyles.errorCardText}>No hay informacion</Text>
    </View>
  );
}

export default HomeScreen;

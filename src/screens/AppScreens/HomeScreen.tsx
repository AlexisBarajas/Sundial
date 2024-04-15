
import { StatusBar } from "expo-status-bar";

// Components
import { Text, View, ImageBackground, Image, ScrollView } from "react-native";

import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import ButtonWithBorder from "../../components/buttons/ButtonWithBorder";
import ListElement from "../../components/cards/ListElement";
import CardError from "../../components/cards/CardError";

// Styles
import AppStyles from "../../styles/AppStyles";

const HomeScreen = ({ navigation }: any) => {
  // Screen Constants
  const image : string = require("./../../img/app-images/error-message.png");

  const username: string = "Juan Perez";
  const city: string = "New York";
  const temperature: number = 25;

  type DataType = {
    id: number;
    title: string;
    desc: string;
  };

  const data: DataType[] = [
    { id: 1, title: "Analisis 1", desc: "Descripcion 1" },
    { id: 2, title: "Analisis 2", desc: "Descripcion 2" },
    { id: 3, title: "Analisis 3", desc: "Descripcion 3" },
  ];

  const navigateToAnalysis = (id : number) => {
    navigation.navigate("Analysis", {id});
  };

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
          data.map((item, index) => (
            <ListElement
              key={index}
              content={item}
              onPress={() => navigateToAnalysis(item.id)}
            />
          ))
        ) : (
          <CardError 

            image={image}
            text="No hay analisis disponibles"
          
          />
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

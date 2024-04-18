import { StatusBar } from "expo-status-bar";
// Components
import { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  ImageSourcePropType,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import ButtonWithIcon from "../../components/buttons/ButtonWithIcon";
import ButtonWithBorder from "../../components/buttons/ButtonWithBorder";
import ListElement from "../../components/cards/ListElement";
import CardError from "../../components/cards/CardError";

// Utilities
import { getPermission } from "../../utils/permissions/locationPermissions";

// Styles
import AppStyles from "../../styles/AppStyles";
import ModalStyles from "../../styles/ModalStyles";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// types
type DataType = {
  id: number;
  title: string;
  desc: string;
};

const HomeScreen = ({ navigation }: any) => {
  // Navigation functions
  const navigateToAnalysis = (id: number) => {
    navigation.navigate("Analysis", { id });
  };

  // Screen vars
  const errorImage: ImageSourcePropType = require("./../../img/app-images/error-message.png");
  const headerImageBackground: ImageSourcePropType = require("./../../img/app-images/header-home.jpg");
  const [modalVisible, setModalVisible] = useState(false);

  // App usage vars
  const username: string = "Juan Perez"; /* TODO: Get this from a db */
  const city: string =
    "New York"; /* TODO: Get this from a location permission */
  const temperature: number = 25; /* TODO: Get this from a weather api */

  // User data app TODO: Get this from a db
  const data: DataType[] = [
    { id: 1, title: "Analisis 1", desc: "Descripcion 1" },
    { id: 2, title: "Analisis 2", desc: "Descripcion 2" },
    { id: 3, title: "Analisis 3", desc: "Descripcion 3" },
  ];

  return (
    <ScrollView style={AppStyles.container}>
      <StatusBar style="dark" />
      <Text style={AppStyles.headerTitle}>Buenos dias, {username}.</Text>
      <View style={AppStyles.headerCard}>
        <ImageBackground
          source={headerImageBackground}
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
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback
          style={ModalStyles.centeredView}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={ModalStyles.centeredView}>
            <View style={ModalStyles.modalView}>
              <View style={ModalStyles.modalHeader}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Ionicons name="close" size={35}></Ionicons>
                </TouchableOpacity>
              </View>
              <View style={ModalStyles.modalBody}>
                <ButtonWithIcon
                  icon="pin"
                  title="Analisis local"
                  onPress={() => console.log("xx")}
                />
                <ButtonWithIcon
                  type="secondary"
                  icon="navigate"
                  title="Otra area"
                  onPress={() => console.log("x")}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

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
          <CardError image={errorImage} text="No hay analisis disponibles" />
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

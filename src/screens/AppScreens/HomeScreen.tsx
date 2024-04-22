import { StatusBar } from "expo-status-bar";
// Components
import { useState } from "react";
import {
  Text,
  View,
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
import { navigateTo } from "../../utils/navigator/navigateTo";

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

  // Screen vars
  const errorImage: ImageSourcePropType = require("./../../img/app-images/error-message.png");
  const [modalVisible, setModalVisible] = useState(false);

  // App usage vars
  const username: string = "Juan Perez"; /* TODO: Get this from a db */
  const temperature: number = 25; /* TODO: Get this from a weather api */

  // User data app TODO: Get this from a db
  const data: DataType[] = [
    {
      id: 1,
      title: "Analisis de zona 1",
      desc: "Analisis de la zona 1 de la ciudad de New York",
    },
    {
      id: 2,
      title: "Analisis de zona 2",
      desc: "Analisis de la zona 2 de la ciudad de New York",
    },
    {
      id: 3,
      title: "Analisis de zona 3",
      desc: "Analisis de la zona 3 de la ciudad de New York",
    },
    {
      id: 4,
      title: "Analisis de zona 4",
      desc: "Analisis de la zona 4 de la ciudad de New York",
    },
    {
      id: 5,
      title: "Analisis de zona 5",
      desc: "Analisis de la zona 5 de la ciudad de New York",
    },
  ];

  return (
    <ScrollView style={AppStyles.container}>
      <StatusBar style="dark" />
      <Text style={AppStyles.headerTitle}>Buenos dias, {username}.</Text>

      <ButtonWithIcon
        icon="compass"
        title="Realizar analisis de zona"
        onPress={() => setModalVisible(true)}
      />

      <View>
        <View style={AppStyles.sectionHeader}>
          <Text style={AppStyles.sectionHeaderTitle}>Ultimos analisis</Text>
          <ButtonWithBorder
            title="Ver mas"
            onPress={() => console.log("View more... clicked.")}
          />
        </View>
        {data.length > 0 ? (
          data.map((item, index) => (
            <ListElement
              key={index}
              content={item}
              onPress={() => navigateTo(navigation, "Analysis", {id: item.id})}
            />
          ))
        ) : (
          <CardError image={errorImage} text="No hay analisis disponibles" />
        )}
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
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
                  onPress={() => navigateTo(navigation, "doAnalysis", {area: "local"})}
                  />

                <ButtonWithIcon
                  type="secondary"
                  icon="navigate"
                  title="Otra area"
                  onPress={() => navigateTo(navigation, "doAnalysis", {area: "other"})}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
};

export default HomeScreen;

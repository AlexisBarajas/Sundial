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
import BtnModal from "../../components/modals/BtnModal";

// Utilities
import { navigateTo } from "../../utils/navigator/navigateTo";

// Styles
import AppStyles from "../../styles/AppStyles";

// types
type DataType = {
  id: number;
  title: string;
  desc: string;
};

const AnalysisConfig = {
  area: "local",
  cropName: "corn",
  setArea: (area: string) => {
    AnalysisConfig.area = area;
  },
  getArea: () => {
    return AnalysisConfig.area;
  },
  setCropName: (cropName: string) => {
    AnalysisConfig.cropName = cropName;
  },
  getCropName: () => {
    return AnalysisConfig.cropName;
  },
};

const HomeScreen = ({ navigation }: any) => {
  // Screen vars
  const errorImage: ImageSourcePropType = require("./../../img/app-images/error-message.png");

  const [modalAreaVisible, setAreaModalVisible] = useState(false);
  const [cropModalVisible, setCropModalVisible] = useState(false);

  // App usage vars
  const username: string = "Juan Perez"; /* TODO: Get this from a db */

  // Modal crop data
  const cropDataBtns = [
    {
      icon: "home",
      text: "Cultivo de cana",
      onPress: () => {
        AnalysisConfig.setCropName("cane");
        setCropModalVisible(!cropModalVisible);
      },
    },
    {
      icon: "home",
      text: "Cultivo de arroz",
      onPress: () => {
        AnalysisConfig.setCropName("rice");
        setCropModalVisible(!cropModalVisible);
      },
    },
    {
      icon: "home",
      text: "Cultivo de frijol",
      onPress: () => {
        AnalysisConfig.setCropName("beans");
        setCropModalVisible(!cropModalVisible);
      },
    },
    {
      icon: "home",
      text: "Cultivo de maiz",
      onPress: () => {
        AnalysisConfig.setCropName("corn");
        setCropModalVisible(!cropModalVisible);
      },
    },
    {
      icon: "home",
      text: "Cultivo de trigo",
      onPress: () => {
        AnalysisConfig.setCropName("wheat");
        setCropModalVisible(!cropModalVisible);
      },
    },
  ];

  const typeOfAnalysis = [
    {
      icon: "pin",
      text: "Analisis local",
      onPress: () => {
        AnalysisConfig.setArea("local");
        setAreaModalVisible(!modalAreaVisible);
        setCropModalVisible(!cropModalVisible);
      },
    },
    {
      icon: "navigate",
      text: "Otra area",
      onPress: () => {
        AnalysisConfig.setArea("otros");
        setAreaModalVisible(!modalAreaVisible);
        setCropModalVisible(!cropModalVisible);
      },
    },
  ];

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
        onPress={() => setAreaModalVisible(!modalAreaVisible)}
      />

      <BtnModal
        visible={modalAreaVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAreaModalVisible(!modalAreaVisible)}
        buttons={typeOfAnalysis}
      />

      <BtnModal
        visible={cropModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setCropModalVisible(!cropModalVisible)}
        buttons={cropDataBtns}
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
              onPress={() =>
                navigateTo(navigation, "Analysis", { id: item.id })
              }
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

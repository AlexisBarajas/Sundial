import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import AppTopBar from "../../components/AppTopBar";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

// Styles
import Styles from "../../styles/StyleForm";

// Components
import InputSendBtn from "../../components/InputSendBtn";

interface Props extends StackScreenProps<any, any> {}

const NewUserScreen = ({ navigation, route }: Props) => {
  const params = route.params;
  const username = params?.username;

  const handleLogin = () => {
    // Create user
    navigation.navigate("login");
  };

  return (
    <ImageBackground
      source={require("./../../img/auth-backgrounds/login-bg.jpg")}
      style={Styles.backgroundImage}
    >
      <StatusBar style="light" />
      <View style={Styles.overlay}>
        <View style={Styles.header}>
          <Text style={Styles.title}>SUNDIAL</Text>
          <Text style={Styles.text}>Bienvenido, {username}.</Text>
        </View>

        <View style={Styles.form}>
          <InputSendBtn onPress={handleLogin} text={"Iniciar sesion"} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default NewUserScreen;

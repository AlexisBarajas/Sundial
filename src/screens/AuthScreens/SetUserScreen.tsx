import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
// Styles
import Styles from "../../styles/StyleForm";

// Components
import InputSendBtn from "../../components/InputSendBtn";
import LinkText from "../../components/LinkText";
import TextInputWithIcon from "../../components/TextInputWithIcon";

interface Props extends StackScreenProps<any, any> {}

const SetUserScreen = ({ navigation, route }: Props) => {
  const params = route.params;
  const [username, setUsername] = useState("");

  const handleCreateUser = () => {
    // Create user

    navigation.navigate("new_user", {
      username,
    });
  };
  const handleUserChange = (username: string) => {
    setUsername(username);
  };

  return (
    <View style={Styles.backgroundColored}>
      <ImageBackground
        source={require("./../../img/auth-backgrounds/login-bg.jpg")}
        style={Styles.backgroundImage}
      >
        <StatusBar style="light" />
        <View style={Styles.overlay}>
          <View style={Styles.header}>
            <Text style={Styles.title}>SUNDIAL</Text>
            <Text style={Styles.text}>
              Ingresa un nombre de usuario para tu cuenta.
            </Text>
          </View>

          <View style={Styles.form}>
            <TextInputWithIcon
              icon={"person"}
              iconSize={25}
              keyboardType="default"
              placeholder={"Nombre de usuario"}
              onChangeText={handleUserChange}
              value={username}
            />
            <InputSendBtn onPress={handleCreateUser} text={"Crear cuenta"} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SetUserScreen;

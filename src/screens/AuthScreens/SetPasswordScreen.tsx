import { ImageBackground, View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import AppTopBar from "../../components/AppTopBar";
import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

// Components
import InputSendBtn from "../../components/InputSendBtn";
import LinkText from "../../components/LinkText";
import TextInputWithIcon from "../../components/TextInputWithIcon";

// Styles
import Styles from "../../styles/StyleForm";

interface Props extends StackScreenProps<any, any> {}

const SetPasswordScreen = ({ navigation, route }: Props) => {
  const params = route.params;
  const email = params?.mail;

  const [password, setPassword] = useState("")
  const [secondPassword, setsecondPassword] = useState("")

  const handleSetUser = () => {

    // Validate information

    navigation.navigate("set_user", {
      mail: email,
      pass: password,
    });
  };
  const handlePasswordChange = (password: string) => {
    setPassword(password);
  }
  const handlePasswordConfirmChange = (password: string) => {
    setsecondPassword(password);
  }

  return (
    <ImageBackground
      source={require("./../../img/auth-backgrounds/login-bg.jpg")}
      style={Styles.backgroundImage}
    >
      <StatusBar style="light" />
      <View style={Styles.overlay}>
        <View style={Styles.header}>
          <Text style={Styles.title}>SUNDIAL</Text>
          <Text style={Styles.text}>
            Ingresa la contrasena para tu cuenta.
          </Text>
        </View>

        <View style={Styles.form}>
          <TextInputWithIcon
            icon={"key"}
            iconSize={25}
            keyboardType="password"
            placeholder={"Contrasena"}
            onChangeText={handlePasswordChange}
            value={password}
          />
          <TextInputWithIcon
            icon={"key"}
            iconSize={25}
            keyboardType="password"
            placeholder={"Confirmar contrasena"}
            onChangeText={handlePasswordConfirmChange}
            value={secondPassword}
          />
          <InputSendBtn
            text={"Continuar"}
            onPress={handleSetUser}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SetPasswordScreen;

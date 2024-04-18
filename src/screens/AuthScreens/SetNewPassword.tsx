import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

// Components
import InputSendBtn from "../../components/buttons/ButtonInput";
import LinkText from "../../components/buttons/LinkText";
import TextInputWithIcon from "../../components/buttons/TextInputWithIcon";

// Styles
import Styles from "../../styles/StyleForm";

interface Props extends StackScreenProps<any, any> {}

const SetNewPassword = ({ navigation, route }: Props) => {
  const params = route.params;
  const email = params?.mail;
  const from = params?.from;
  const username = "User"; // TODO: Get the username from de database

  const [password, setPassword] = useState("");
  const [secondPassword, setsecondPassword] = useState("");

  const handleSetUser = () => {
    // Validate information

    // If the user comes from recover password screen
    if (from === "recover_password") {
      navigation.navigate("new_user", {
        username,
        from,
      });

      return;
    }

    navigation.navigate("set_user", {
      mail: email,
      pass: password,
    });
  };
  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };
  const handlePasswordConfirmChange = (password: string) => {
    setsecondPassword(password);
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
              Crea una contrasena segura.
            </Text>
          </View>

          <View style={Styles.form}>
            <TextInputWithIcon
              icon={"key"}
              iconSize={25}
              keyboardType={"default"}
              secureTextEntry={true}
              placeholder={"Contrasena"}
              onChangeText={handlePasswordChange}
              value={password}
            />
            <TextInputWithIcon
              icon={"key"}
              iconSize={25}
              keyboardType={"default"}
              secureTextEntry={true}
              placeholder={"Confirmar contrasena"}
              onChangeText={handlePasswordConfirmChange}
              value={secondPassword}
            />
            <InputSendBtn text={"Continuar"} onPress={handleSetUser} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SetNewPassword;

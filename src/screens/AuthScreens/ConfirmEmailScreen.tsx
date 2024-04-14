import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
// Styles
import Styles from "../../styles/StyleForm";
// Components
import InputSendBtn from "../../components/InputSendBtn";
import LinkText from "../../components/LinkText";
import TextInputWithIcon from "../../components/TextInputWithIcon";

interface Props extends StackScreenProps<any, any> {}

const ConfirmEmailScreen = ({ navigation, route }: Props) => {
  // const params = JSON.stringify(route.params, null);
  const params = route.params;
  const email : string = params?.mail;
  const from : string = params?.from;
  const code = params?.code; // Real code to validate the user

  const [userCode, setUserCode] = useState("");

  const handleChangeEmail = (codeFromUser: string) => {
    setUserCode(codeFromUser);
  };

  const sendEmail = (email: string) => {
    // Send email to the user
    console.log("Email sent to: ", email);
  };

  const handleSetPassword = () => {
    // Validate information

    // If the user comes from recover password screen
    if (from === "recover_password") {
      navigation.navigate("set_new_password", {
        mail: email,
        from,
      });

      return;
    }

    navigation.navigate("set_password", {
      mail: email,
    });
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
              Ingresa el codigo de confirmacion enviado a tu correo {email}.
            </Text>
          </View>

          <View style={Styles.form}>
            <TextInputWithIcon
              icon={"key"}
              iconSize={25}
              keyboardType="number-pad"
              placeholder={"Codigo"}
              onChangeText={handleChangeEmail}
              value={userCode}
            />
            <InputSendBtn text={"Confirmar"} onPress={handleSetPassword} />
            <LinkText
              text={"Reenviar codigo"}
              onPress={() => sendEmail(email)}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ConfirmEmailScreen;

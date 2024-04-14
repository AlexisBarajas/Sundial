import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";

// Styles
import Styles from "../../styles/StyleForm";

// Components
import InputSendBtn from "../../components/InputSendBtn";
import LinkText from "../../components/LinkText";
import TextInputWithIcon from "../../components/TextInputWithIcon";

import { Text, View, ImageBackground } from "react-native";

interface Props extends StackScreenProps<any, any> {}

const RegisterEmailScreen /* : React.FC<RegisterEmailProps> */ = (
  { navigation }: Props /* : LoginScreenProps */
) => {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handleEmailConfirmChange = (text: string) => {
    setEmailConfirm(text);
  };

  const handleRegisterPassword = () => {
    // Validate information
    const confirmationCode = "123ABC";

    navigation.navigate("confirm_email", {
      mail: email,
      code: confirmationCode,
    });
  };

  return (
    <View style={Styles.backgroundColored}>
      <ImageBackground
        source={require("./../../img/auth-backgrounds/register-bg.jpg")}
        style={Styles.backgroundImage}
      >
        <StatusBar style="auto" />
        <View style={Styles.overlay}>
          <View style={Styles.overlay}>
            <View style={Styles.header}>
              <Text style={Styles.title}>SUNDIAL</Text>
              <Text style={Styles.text}>Registra una nueva cuenta.</Text>
            </View>

            <View style={Styles.form}>
              <TextInputWithIcon
                icon={"mail"}
                iconSize={25}
                keyboardType="email-address"
                placeholder={"Correo"}
                onChangeText={handleEmailChange}
                value={email}
              />
              <TextInputWithIcon
                icon={"mail"}
                iconSize={25}
                keyboardType="email-address"
                placeholder={"Repite tu correo"}
                onChangeText={handleEmailConfirmChange}
                value={emailConfirm}
              />
              <InputSendBtn onPress={handleRegisterPassword} text="Continuar" />
              <Text style={Styles.textSecondary}>
                O{" "}
                <LinkText
                  text={"Inicia sesion"}
                  onPress={() =>
                    navigation.navigate("Auth", { screen: "login" })
                  }
                />
                .
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterEmailScreen;

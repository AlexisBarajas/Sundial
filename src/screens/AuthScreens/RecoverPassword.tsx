import { StatusBar } from "expo-status-bar";
import { useState } from "react";

// Navigation
import { StackScreenProps } from "@react-navigation/stack";

// Styles
import Styles from "../../styles/StyleForm";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import InputSendBtn from "../../components/buttons/ButtonInput";
import LinkText from "../../components/buttons/LinkText";
import TextInputWithIcon from "../../components/buttons/TextInputWithIcon";

import { Text, View, ImageBackground } from 'react-native';

type Props = StackScreenProps<any, any>;

const RecoverPassword = ( { navigation } : Props ) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  }

  const handleRegisterPassword = () => {
    // Validate information
    const confirmationCode = "123ABC";

    navigation.navigate("confirm_email", {
      mail: email,
      code: confirmationCode,
      from: "recover_password",
    });
  }
  
  return (
    <View style={Styles.backgroundColored}>
      <ImageBackground
        source={require("./../../img/auth-backgrounds/recover-password-bg.jpg")}
        style={Styles.backgroundImage}
      >
        <StatusBar style="auto" />
        <View style={Styles.overlay}>
          <View style={Styles.overlay}>
            <View style={Styles.header}>
              <Text style={Styles.title}>SUNDIAL</Text>
              <Text style={Styles.text}>Recupera tu contrasena.</Text>
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

export default RecoverPassword;
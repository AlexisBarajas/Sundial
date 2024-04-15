import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { Text, View, ImageBackground } from "react-native";

// Styles
import Styles from "../../styles/StyleForm";

// Components
import InputSendBtn from "../../components/buttons/InputSendBtn";
import LinkText from "../../components/buttons/LinkText";
import TextInputWithIcon from "../../components/buttons/TextInputWithIcon";

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleLogin = () => {
    navigation.navigate("App", { screen: "home" });
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
            <Text style={Styles.text}>Inicia sesion en tu cuenta.</Text>
          </View>

          <View style={Styles.form}>
            <TextInputWithIcon
              icon={"mail"}
              iconSize={25}
              keyboardType={"email-address"}
              placeholder={"Correo"}
              onChangeText={handleEmailChange}
              value={email}
            />
            <TextInputWithIcon
              icon={"key"}
              iconSize={25}
              keyboardType={"default"}
              secureTextEntry={true}
              placeholder={"Contrasena"}
              onChangeText={handlePasswordChange}
              value={password}
            />
            <InputSendBtn text={"Inicia sesion"} onPress={handleLogin} />
            <Text style={Styles.textSecondary}>
              O puedes{" "}
              <LinkText
                text={"registrarte"}
                onPress={() =>
                  navigation.navigate("Auth", { screen: "register" })
                }
              />
              , o{" "}
              <LinkText
                text={"recuperar tu contrasena"}
                onPress={() =>
                  navigation.navigate("Auth", { screen: "recover_password" })
                }
              />
              .
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

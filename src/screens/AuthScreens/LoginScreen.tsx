import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationProp, useNavigation  } from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Styles from "../../styles/StyleForm";

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

const LoginScreen = ({ navigation } : LoginScreenProps ) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleLogin = () => {
    navigation.navigate('App', { screen: "home" });
  };

  return (
    <View>
      <View>
        <View>
          <Image
            source={require("./../../../assets/favicon.png")}
          />
          <StatusBar style="auto" />
          <Text>SUNDIAL</Text>
          <Text>Inicia sesion en tu cuenta.</Text>
        </View>
        <View>
          <TextInput
            placeholder="Correo"
            keyboardType="email-address"
            onChangeText={handleEmailChange}
            value={email}
          />
          <TextInput
            placeholder="Contasena"
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry
          />
          <TouchableWithoutFeedback onPress={handleLogin}>
            <Text>Iniciar sesion</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <Text>
          O{" "}
          <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('Auth', { screen: "register" })}
          >
            <Text>registrate</Text>
          </TouchableWithoutFeedback>
          .
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

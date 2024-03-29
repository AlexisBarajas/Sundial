import { StatusBar } from "expo-status-bar";
import { useState } from "react";
// import { NavigationProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenProps } from "@react-navigation/stack";
import Styles from "../../styles/StyleForm";
// import Costants from "expo-constants";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

interface Props extends StackScreenProps<any, any>{};

// interface LoginScreenProps {
//   navigation: NavigationProp<any>;
// }

// type RootStackParamList = {
//   ConfirmEmail: { email: string; confirmationCode: string };
// };

// type RegisterEmailProps = {
//   navigation: StackNavigationProp<RootStackParamList, "ConfirmEmail">;
// };

const RegisterEmailScreen/* : React.FC<RegisterEmailProps> */ = ({
  navigation
} : Props/* : LoginScreenProps */) => {
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
    <View>
      <StatusBar style="auto" />
      <View>
        <View>
          <Image
            source={require("./../../../assets/favicon.png")}
          />
          <Text>SUNDIAL</Text>
          <Text>Registra una nueva cuenta.</Text>
        </View>
        <View>
          <TextInput
            placeholder="Correo"
            keyboardType="email-address"
            onChangeText={handleEmailChange}
            value={email}
          />
          <TextInput
            placeholder="Repite tu correo"
            keyboardType="email-address"
            onChangeText={handleEmailConfirmChange}
            value={emailConfirm}
          />
          <TouchableWithoutFeedback onPress={handleRegisterPassword}>
            <Text>Continuar</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <Text>
          O{" "}
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("login")}
          >
            <Text>inicia sesion</Text>
          </TouchableWithoutFeedback>
          .
        </Text>
      </View>
    </View>
  );
};

export default RegisterEmailScreen;

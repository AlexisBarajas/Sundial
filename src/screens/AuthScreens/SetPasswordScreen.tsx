import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import AppTopBar from "../../components/AppTopBar";
import { StackScreenProps } from "@react-navigation/stack";
import Styles from "../../styles/StyleForm";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

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
    <View>
      <AppTopBar></AppTopBar>
      <View>
        <StatusBar style="auto" />
        <View>
          <View>
            <Text>SUNDIAL</Text>
            <Text>Crea una contrasena</Text>
          </View>

          <View>
            <TextInput
              placeholder="Contasena"
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry
            />

            <TextInput
              placeholder="Repite la contasena"
              onChangeText={handlePasswordConfirmChange}
              value={secondPassword}
              secureTextEntry
            />

            <TouchableWithoutFeedback onPress={handleSetUser}>
              <Text>Continuar</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SetPasswordScreen;

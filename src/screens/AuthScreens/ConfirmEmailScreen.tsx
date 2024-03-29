import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
// import { RouteProp } from '@react-navigation/native';
import { StackScreenProps } from "@react-navigation/stack";
import Styles from "../../styles/StyleForm";
import AppTopBar from "../../components/AppTopBar";

interface Props extends StackScreenProps<any, any> {}

const ConfirmEmailScreen = ({ navigation, route }: Props) => {
  // const params = JSON.stringify(route.params, null);
  const params = route.params;
  const email = params?.mail;
  const code = params?.code; // Real code to validate the user

  const [userCode, setUserCode] = useState("");

  const handleChangeEmail = (codeFromUser: string) => {
    setUserCode(codeFromUser);
  };

  const handleSetPassword = () => {

    // Validate information
    
    navigation.navigate("set_password", {
      mail: email,
    });
  };

  return (
    <View>
      <AppTopBar></AppTopBar>
      <View>
        <StatusBar style="auto" />
        <View>
          <View>
            <Text>SUNDIAL</Text>
            <Text>Confirma tu email</Text>
            <Text>
              Se envio un codigo de verificacion a{" "}
              <Text>{email}</Text> introducelo para
              continuar.
            </Text>
          </View>

          <View>
            <TextInput
              placeholder="Codigo"
              keyboardType="default"
              onChangeText={handleChangeEmail}
              value={userCode}
            />

            <TouchableWithoutFeedback onPress={handleSetPassword}>
              <Text>Continuar</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmEmailScreen;

import { View, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import AppTopBar from "../../components/AppTopBar";
import { StackScreenProps } from "@react-navigation/stack";
import Styles from "../../styles/StyleForm";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

interface Props extends StackScreenProps<any, any> {}

const SetUserScreen = ({ navigation, route }: Props) => {
  const params = route.params;
  const mail = params?.mail;
  const pass = params?.pass;
  const [username, setUsername] = useState("");

  const handleCreateUser = () => {
    // Create user

    navigation.navigate("new_user", {
      username,
    });
  };
  const handleUserChange = (username: string) => {
    setUsername(username);
  };

  return (
    <View>
      <AppTopBar></AppTopBar>
      <View>
        <StatusBar style="auto" />
        <View>
          <View>
            <Text>SUNDIAL</Text>
            <Text>Crea tu usuario</Text>
          </View>

          <View>
            <TextInput
              placeholder="Nombre de usuario"
              onChangeText={handleUserChange}
              value={username}
            />

            <TouchableWithoutFeedback onPress={handleCreateUser}>
              <Text>Continuar</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SetUserScreen;

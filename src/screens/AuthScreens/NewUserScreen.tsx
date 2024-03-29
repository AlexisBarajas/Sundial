import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import AppTopBar from "../../components/AppTopBar";
import { StackScreenProps } from "@react-navigation/stack";
import Styles from "../../styles/StyleForm";
import { StatusBar } from "expo-status-bar";

interface Props extends StackScreenProps<any, any> {}

const NewUserScreen = ({ navigation, route }: Props) => {
  const params = route.params;
  const username = params?.username;

  const handleLogin = () => {
    // Create user

    navigation.navigate("login");
  };

  return (
    <View>
      <View>
        <StatusBar style="auto" />
        <View>
          <View>
            <Image
              source={require("./../../../assets/favicon.png")}
            />
            <Text>SUNDIAL</Text>
            <Text>
              Bienvenido <Text>{username}</Text>, tu
              cuenta fue creada con exito.
            </Text>
          </View>

          <View>
            <TouchableWithoutFeedback onPress={handleLogin}>
              <Text>Terminar</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewUserScreen;

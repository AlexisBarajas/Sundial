import { View, Text, Image, TouchableOpacity } from "react-native";
import Styles from "../styles/StyleForm";
import { useNavigation } from "@react-navigation/native";

const AppTopBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View>
          <Text>Regresar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AppTopBar;

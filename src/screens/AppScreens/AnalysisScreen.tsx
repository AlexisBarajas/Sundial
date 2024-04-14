import { View, Text } from "react-native";

type Props = {
  route: {
    params: {
      id: number;
    };
  };
};

const AnalysisScreen: React.FC<Props> = ( {route} )  => {
  
  const { id } = route.params;

  return (
    <View>
      <Text>Analysis ID: {id}</Text>
    </View>
  );
}

export default AnalysisScreen;
import { View, Text } from "react-native";

type Props = {
  id: number;
};
type NavProps = {
  navigation: any;
};

const AnalysisScreen = ( { navigation }: NavProps, { id } : Props )  => {
  const analysisId = id;

  return (
    <View>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
      <Text>Analysis ID: {analysisId}</Text>
    </View>
  );
}

export default AnalysisScreen;
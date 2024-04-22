import { ScrollView, View, Text } from 'react-native';

type Props = {
  route: any;
}

const DoAnalysisScreen: React.FC<Props> = ( { route } ) => {
  const { area } = route.params;

  return (
    <ScrollView>
      <View>
        <Text>Do Analysis Screen ({area})</Text>
      </View>
    </ScrollView>
  );
}

export default DoAnalysisScreen;
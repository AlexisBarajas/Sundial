
// Dependencies
import { StackScreenProps } from "@react-navigation/stack";
// Componets
import { View, Text, ScrollView } from "react-native";


interface Props extends StackScreenProps<any, any> {}
const AnalysisScreen: React.FC<Props> = ( {route} )  => {
  
  const params = route.params;
  const id : number = params?.id;
  console.log(id);
  

  return (
    <ScrollView>
      {/* TODO: Create the screen to show the analisys */}
    </ScrollView>
  );

}

export default AnalysisScreen;
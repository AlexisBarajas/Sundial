
// Dependencies
import { StackScreenProps } from "@react-navigation/stack";
// Componets
import { View, Text, ScrollView } from "react-native";


interface Props extends StackScreenProps<any> {}

const AnalysisScreen: React.FC<Props> = ( {route} )  => {
  console.log(route);
  
  
  const { id } : any = route.params;
  // const id : number = params?.id;
  console.log(id);
  

  return (
    <ScrollView>
      {/* TODO: Create the screen to show the analisys */}
    </ScrollView>
  );

}

export default AnalysisScreen;
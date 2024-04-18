import {
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Styles from "../../styles/StyleForm";

type InputSendBtnProps = {
  onPress: () => void;
  text: string;
}

const InputSendBtn = ({ onPress, text }: InputSendBtnProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={Styles.sendBtn}>
        <Text style={Styles.sendBtnText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default InputSendBtn;
import { Text, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native';
import AppStyles from '../../styles/AppStyles';
import Ionicons from "react-native-vector-icons/Ionicons";

type ButtonWithIconProps = {
  icon: string;
  title: string;
  onPress: () => void;
  type?: "secondary" | "tertiary";
}


const ButtonWithIcon = ({ icon, title, onPress, type } : ButtonWithIconProps) => {
  return (
    <TouchableOpacity
      style={
        (type === "secondary")
        ? AppStyles.TertiaryButton 
        : AppStyles.PrimaryButton
      } 
      onPress={onPress}
    >
      <Ionicons name={icon} size={25} color={AppStyles.iconColor.color} />
      <Text style={AppStyles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon ;
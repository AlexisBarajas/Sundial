import { Text, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native';
import AppStyles from '../styles/AppStyles';
import Ionicons from "react-native-vector-icons/Ionicons";

type ButtonWithIconProps = {
  icon: string;
  title: string;
  onPress: () => void;
}

const ButtonWithIcon = ({ icon, title, onPress } : ButtonWithIconProps) => {
  return (
    <TouchableOpacity style={AppStyles.PrimaryButton} onPress={onPress}>
      <Ionicons name={icon} size={20} color={AppStyles.iconColor.color} />
      <Text style={AppStyles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
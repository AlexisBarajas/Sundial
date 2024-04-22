import { Text, TouchableWithoutFeedback, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

type ButtonWithIconProps = {
  icon: string;
  title: string;
  onPress: () => void;
  type?: "secondary" | "tertiary";
};

const ButtonWithIcon = ({
  icon,
  title,
  onPress,
  type,
}: ButtonWithIconProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={[AppStyles.TertiaryButton,
        type === "secondary"
        ? AppStyles.SecondaryBackgroundButton
        : AppStyles.PrimaryBackgroundButton
      ]}>
        <Ionicons name={icon} size={25} color={AppStyles.iconColor.color} />
        <Text style={AppStyles.primaryButtonText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ButtonWithIcon;

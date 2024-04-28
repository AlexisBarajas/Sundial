// Components
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import ButtonWithIcon from "../buttons/ButtonWithIcon";

// Styles
import ModalStyles from "../../styles/ModalStyles";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

type ButonsInModal = {
  icon: string;
  text: string;
  onPress: () => void;
};

type ListModalProps = {
  onRequestClose: () => void;
  animationType: "slide" | "fade";
  transparent: boolean;
  visible: boolean;

  buttons: ButonsInModal[];
};

const BtnModal:React.FC<ListModalProps> = ( { visible, transparent, animationType, onRequestClose, buttons } ) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <TouchableWithoutFeedback
        style={ModalStyles.centeredView}
        onPress={onRequestClose}
      >
        <View style={ModalStyles.centeredView}>
          <View style={ModalStyles.modalView}>
            <View style={ModalStyles.modalHeader}>
              <TouchableOpacity
                onPress={onRequestClose}
              >
                <Ionicons name="close" size={35}></Ionicons>
              </TouchableOpacity>
            </View>
            <View style={ModalStyles.modalBody}>

              {buttons.map((button, index) => (
                <ButtonWithIcon
                  key={index}
                  icon={button.icon}
                  title={button.text}
                  onPress={button.onPress}
                />
              ))}

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default BtnModal;
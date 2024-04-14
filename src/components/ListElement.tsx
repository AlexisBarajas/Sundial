import { View, Text, TouchableWithoutFeedback } from "react-native";
import AppStyles from "../styles/AppStyles";

type DataType = {
  id: number;
  title: string;
  desc: string;
};

type ListElementProps = {
  content: DataType;
  onPress: () => void;
};

const ListElement: React.FC<ListElementProps> = ({ content, onPress }) => {
  const { id, title, desc } = content;

  const limitWords = (text: string, limit: number) => {
    return desc.length > limit
      ? text.split(" ").slice(0, limit).join(" ") + "..."
      : text;
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          AppStyles.listElement,
          id % 2 === 0 ? AppStyles.listElementBackgroundPrimary : null,
        ]}
      >
        <Text style={AppStyles.listElementTitle}>{title}</Text>
        <Text style={AppStyles.listElementDesc}>{limitWords(desc, 15)}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListElement;

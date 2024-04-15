import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import Styles from "../../styles/StyleForm";

type TextClickableProps = {
    onPress: () => void;
    text: string;
}

const LinkText = ({ onPress, text }: TextClickableProps) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Text style={Styles.textClickeable}>{text}</Text>
        </TouchableWithoutFeedback>
    );
}

export default LinkText;
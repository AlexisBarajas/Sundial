import React from 'react';
import { TextInput, View, KeyboardTypeOptions  } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Styles from "../styles/StyleForm";


type InputTextSendProps = {
  icon: string;
  iconSize: number;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  keyboardType: "email-address" | "password" | "default" | "numeric" | "phone-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad";
  secureTextEntry?: boolean | undefined;
}


const TextInputWithIcon = (props: InputTextSendProps) => {
  return (
    <View style={Styles.input}>
      <Ionicons name={props.icon} style={Styles.inputIcon} size={props.iconSize}></Ionicons>
      <TextInput
        style={Styles.inputText}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType as KeyboardTypeOptions}
        placeholderTextColor={Styles.inputTextColor.color}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
}

export default TextInputWithIcon;
import React from 'react';
import { TextInput, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Styles from "../styles/StyleForm";


type InputTextSendProps = {
  icon: string;
  iconSize: number;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  keyboardType: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "password" ;
}


const TextInputWithIcon = (props: InputTextSendProps) => {
  return (
    <View style={Styles.input}>
      <Ionicons name={props.icon} style={Styles.inputIcon} size={props.iconSize}></Ionicons>
      <TextInput
        style={Styles.inputText}
        placeholder={props.placeholder}
        secureTextEntry={props.keyboardType === "password"}
        keyboardType={props.keyboardType}
        placeholderTextColor={Styles.inputTextColor.color}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
}

export default TextInputWithIcon;
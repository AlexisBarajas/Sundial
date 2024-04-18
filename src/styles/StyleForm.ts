import { StyleSheet } from "react-native";
import Costants from "expo-constants";
import Colors from "./Colors";



const Styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  backgroundColored: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  overlay: {
    backgroundColor: Colors.overlay,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    marginBottom: 80,
    width: "100%",
  },
  form: {
    width: "100%",
    gap: 20,
  },

  


  title: {
    color: Colors.text,
    fontWeight: "900",
    fontSize: 40,
    textAlign: "center",
  },
  text: {
    color: Colors.textSecondary,
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
  },
  textSecondary: {
    color: Colors.textSecondary,
    fontWeight: "400",
    fontSize: 20,
    textAlign: "left",
  },
  textClickeable: {
    color: Colors.text,
    opacity: 0.7,
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },




  input: {
    backgroundColor: Colors.inputBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  inputIcon: {
    color: Colors.inputIconColor,
  },
  inputText: {
    color: Colors.text,
    width: "100%",
    flex: 1,
    fontSize: 20,
  },
  inputTextColor: {
    color: Colors.inputTextColor,
  },




  sendBtn: {
    backgroundColor: Colors.text,
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  sendBtnText: {
    color: Colors.inputBtnTextColor,
    fontSize: 20,
    fontWeight: "700",
  },
  t: {
    backgroundColor: Colors.primary,
  }
});

export default Styles;
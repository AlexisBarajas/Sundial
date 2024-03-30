import { StyleSheet } from "react-native";
import Costants from "expo-constants";



const Styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    color: "#fff",
    fontWeight: "900",
    fontSize: 40,
    textAlign: "center",
  },
  text: {
    color: 'rgba(250, 250, 250, 0.7)',
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
  },
  textSecondary: {
    color: 'rgba(250, 250, 250, 0.7)',
    fontWeight: "400",
    fontSize: 20,
    textAlign: "left",
  },
  textClickeable: {
    color: "#fff",
    opacity: 0.7,
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },




  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  inputIcon: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  inputText: {
    color: "#fff",
    width: "100%",
    flex: 1,
    fontSize: 20,
  },
  inputTextColor: {
    color: "rgba(255, 255, 255, 0.7)",
  },




  sendBtn: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  sendBtnText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
  },
  t: {
    backgroundColor: "red",
  }
});

export default Styles;
import { StyleSheet } from "react-native";

const ModalStyles = StyleSheet.create({
  centeredView: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalView: {
    width: "95%",
    backgroundColor: "#f9f9f9",

    borderRadius: 30,
    
    borderWidth: 1,
    borderColor: "#f6f6f6",

    // padding: 35,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 3,
  },
  modalHeader: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  modalBody: {
    width: "100%",
    marginTop: 7,
  },
});

export default ModalStyles;
import { StyleSheet } from 'react-native'
import Costants from "expo-constants";
import Colors from "./Colors";

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
    paddingTop: Costants.statusBarHeight,
    paddingHorizontal: 20,
  },
  headerCard: {
    flex: 1,
    width: "100%",
    height: "auto",
    maxHeight: 200,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  headerCardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 20,
  },
  headerCardContentTextCity: {
    fontSize: 18,
    fontWeight: "normal",
    color: Colors.text,
    marginBottom: -15,
  },
  headerCardContentTextTemperature: {
    fontSize: 75,
    fontWeight: "900",
    color: Colors.text,
  },
  backgroundCardImage: {
    position: "relative",
    resizeMode: 'cover',
    width: "100%",
    height: "100%",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textBlack,
    marginTop: 20,
    marginBottom: 20,
  },
  
  sectionHeader: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  errorCard: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  errorCardText: {
    marginTop: 20,
    color: Colors.textBlack,
    fontSize: 20,
    textAlign: "center",
  },
  listElement: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: Colors.backgroundCardPrimary,
    marginBottom: 10,
  },
  listElementTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textBlack,
  },
  listElementDesc: {
    fontSize: 15,
    color: Colors.textBlack,
  },
  listElementBackgroundPrimary: {
    backgroundColor: Colors.backgroundCardSecondary,
  },

  // Images

  noDataImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },

  // Button

  PrimaryButton: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  primaryButtonText: {
    color: Colors.text,
    fontSize: 19,
  },
  iconColor: {
    color: Colors.text,
  },

  SecondaryButton: {
    borderRadius: 20,
  },
  secondaryButtonText: {
    color: Colors.textBlack,
    borderWidth: 1,
    borderColor: Colors.borderPrimaryColor,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 13,
  },
  sectionHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
  }
})

export default AppStyles;
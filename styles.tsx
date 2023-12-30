import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  }
})
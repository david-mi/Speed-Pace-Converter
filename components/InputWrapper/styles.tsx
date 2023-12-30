import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F8EDFF"
  },
  input: {
    backgroundColor: "#F8EDFF",
    height: 150,
    width: 200,
    borderRadius: 10,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center"
  }
})
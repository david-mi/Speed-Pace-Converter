import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 20,
    textAlign: "center"
  },
  inputContainer: {
    flex: 1,

  },
  input: {
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "auto",
    marginTop: "auto",
    flex: 1
  }
})
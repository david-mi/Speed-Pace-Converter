import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    flexBasis: "50%",
    flexShrink: 1
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#FFBB5C",
    paddingVertical: 20,
    textAlign: "center"
  },
  input: {
    flex: 1,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "auto",
    marginTop: "auto",
  }
})
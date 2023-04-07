import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 20,
    paddingLeft: 25,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 25,
    fontSize: 30,
  },
});

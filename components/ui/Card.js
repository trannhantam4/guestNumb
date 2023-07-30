import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");
export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.03,
    backgroundColor: "#4e0329",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.25,
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 10,
  },
});

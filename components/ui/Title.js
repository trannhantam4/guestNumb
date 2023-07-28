import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: height * 0.03,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});

import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Button from "../components/Button";
const { height, width } = Dimensions.get("window");
export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>StartScreen</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={{ flexDirection: "row" }}>
        <Button>Reset</Button>
        <Button>Confirm</Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.1,
    backgroundColor: "#4e0329",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.2,
  },
  numberInput: {
    height: height * 0.05,
    fontSize: height * 0.045,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
});

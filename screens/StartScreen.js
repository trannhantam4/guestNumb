import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { useState } from "react";
const { height, width } = Dimensions.get("window");
export default function StartScreen() {
  const [number, setNumber] = useState("");

  function numberInputHandler(number) {
    setNumber(number);
  }
  function resetInput() {
    setNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert("Invalid number!", "Number must be between 1 and 99", [
        { text: "okay", style: "cancel", onPress: resetInput },
      ]);
      return;
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        onChangeText={numberInputHandler}
        autoCorrect={false}
        value={number}
      />
      <View style={{ flexDirection: "row" }}>
        <Button onPress={resetInput}>Reset</Button>
        <Button onPress={confirmInputHandler}>Confirm</Button>
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
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 10,
  },
  numberInput: {
    height: height * 0.06,
    fontSize: height * 0.045,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
});

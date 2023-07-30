import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Button from "../components/ui/Button";
const { width, height } = Dimensions.get("window");
export default function GameOverScreen({ roundNumber, number, onRestart }) {
  return (
    <View style={styles.screen}>
      <Title>GameOverScreen</Title>
      <View>
        <Text style={styles.text}>
          You needed <Text style={styles.highlightText}>{roundNumber}</Text>{" "}
          rounds to guess number{" "}
          <Text style={styles.highlightText}>{number}</Text>
        </Text>
        <View style={{ alignSelf: "center" }}>
          <Button onPress={onRestart}>Play Again</Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: width * 0.05,
    justifyContent: "center",
  },
  text: {
    fontSize: height * 0.03,
    color: "white",
    textAlign: "center",
  },
  highlightText: {
    fontSize: height * 0.035,
    color: "red",
  },
});

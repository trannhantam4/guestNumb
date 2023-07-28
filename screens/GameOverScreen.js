import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
const { width, height } = Dimensions.get("window");
export default function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Title>GameOverScreen</Title>
      <View>
        <Text style={styles.text}>
          You needed <Text style={styles.highlightText}>X</Text> rounds to guess
          number <Text style={styles.highlightText}>Y</Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
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

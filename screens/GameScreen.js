import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Button from "../components/ui/Button";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";

const { height, width } = Dimensions.get("window");
let minBoundary = 1;
let maxBoundary = 100;
function generateRandomNumber(minBoundary, maxBoundary, exclude) {
  const rdNumb =
    Math.floor(Math.random() * (maxBoundary - minBoundary)) + minBoundary;
  if (rdNumb === exclude) {
    return generateRandomNumber(minBoundary, maxBoundary, exclude);
  } else {
    return rdNumb;
  }
}

function GameScreen({ number, onGameOver }) {
  const answer = generateRandomNumber(1, 100, number);
  const [currentGuess, setCurrentGuess] = useState(answer);
  useEffect(() => {
    if (currentGuess === number) {
      onGameOver();
    }
  }, [currentGuess, number, onGameOver]);
  function guessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "higher" && currentGuess > number)
    ) {
      Alert.alert("congrat!!");
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRdGuess = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRdGuess);
  }
  return (
    <View style={styles.screen}>
      <Title>Guess Number</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text
          style={{
            color: Colors.orange,
            fontWeight: "bold",
            fontSize: height * 0.04,
          }}
        >
          Higher or Lower
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button onPress={guessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </Button>
          <Button onPress={guessHandler.bind(this, "higher")}>
            <Ionicons name="md-add" size={24} color="white" />
          </Button>
        </View>
      </Card>
      <Text>LOG ROUND</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
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
export default GameScreen;

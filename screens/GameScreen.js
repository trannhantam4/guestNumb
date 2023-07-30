import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Button from "../components/ui/Button";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

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
  const [guessRound, setGuessRound] = useState([answer]);
  useEffect(() => {
    if (currentGuess === number) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, number, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function guessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "higher" && currentGuess > number)
    ) {
      Alert.alert("Try Again!!", "Not this way, try other");
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
    setGuessRound((prevGuessRound) => [newRdGuess, ...prevGuessRound]);
  }
  const guessRoundListLength = guessRound.length;
  return (
    <ScrollView style={styles.topScreen}>
      <KeyboardAvoidingView style={styles.topScreen}>
        <View style={styles.screen}>
          <Title>Guess Number</Title>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card>
            <Text
              style={{
                color: Colors.orange,
                fontWeight: "bold",
                fontSize: height * 0.04,
                padding: width * 0.05,
              }}
            >
              Lower or Higher?
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Button onPress={guessHandler.bind(this, "lower")}>
                <Ionicons name="md-remove" size={width * 0.055} color="white" />
              </Button>
              <Button onPress={guessHandler.bind(this, "higher")}>
                <Ionicons name="md-add" size={width * 0.055} color="white" />
              </Button>
            </View>
          </Card>
          <View style={styles.listView}>
            <FlatList
              data={guessRound}
              renderItem={(itemData) => (
                <GuessLogItem
                  roundNumber={guessRoundListLength - itemData.index}
                  guess={itemData.item}
                />
              )}
              keyExtractor={(item) => item}
            ></FlatList>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  topScreen: { flex: 1 },
  screen: {
    flex: 1,
    padding: width * 0.05,
  },
  title: {
    fontSize: height * 0.03,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: width * 0.025,
  },
  listView: {
    flex: 1,
    padding: width * 0.03,
  },
});
export default GameScreen;

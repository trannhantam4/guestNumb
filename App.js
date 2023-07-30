import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [number, setNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  function pickNumberHandler(pickedNumber) {
    setNumber(pickedNumber);
    setGameOver(false);
  }
  function gameOverHandler(numberOfRound) {
    setGameOver(true);
    setRoundNumber(numberOfRound);
  }
  function startNewGameHandler() {
    setNumber(null);
    setRoundNumber(0);
  }
  let screen = <StartScreen onPickNumber={pickNumberHandler} />;
  if (number) {
    screen = <GameScreen number={number} onGameOver={gameOverHandler} />;
  }
  if (gameOver && number) {
    screen = (
      <GameOverScreen
        roundNumber={roundNumber}
        number={number}
        onRestart={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/image/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    opacity: 0.2,
  },
});

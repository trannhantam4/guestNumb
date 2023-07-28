import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";
const { height, width } = Dimensions.get("window");

export default function Button({ children, onPress }) {
  function pressHandler() {
    console.log("pressed");
  }

  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: "#4e0329" }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            height: height * 0.05,
            textAlignVertical: "center",
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#72063c",
    borderRadius: 20,
    elevation: 8,
    overflow: "hidden",
    width: width * 0.4,
    height: height * 0.05,
    margin: width * 0.02,
  },
  pressed: {
    opacity: 0.75,
  },
});

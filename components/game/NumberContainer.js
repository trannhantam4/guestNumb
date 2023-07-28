import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function NumberContainer({ children }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
export default NumberContainer;
const styles = StyleSheet.create({
  screen: {
    borderWidth: 4,
    borderColor: Colors.orange,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: Colors.orange, fontSize: 36, fontWeight: "bold" },
});

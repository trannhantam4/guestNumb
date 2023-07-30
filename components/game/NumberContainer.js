import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
const { width, height } = Dimensions.get("window");
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
    padding: width * 0.02,
    borderRadius: 8,
    margin: width * 0.02,
    marginHorizontal: width * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: Colors.orange, fontSize: 36, fontWeight: "bold" },
});

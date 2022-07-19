import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import QuoteCard from "./src/components/QuoteCard";
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <QuoteCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrayishBlue,
    alignItems: "center",
    justifyContent: "center",
  },
});

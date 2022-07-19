import { View, Text, StyleSheet, Platform } from "react-native";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

const QuoteCard = () => {
  return (
    <View>
      <Text style={styles.adviceNumber}>Advice #117</Text>
      <Text style={styles.quote}>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  adviceNumber: {
    fontWeight: fonts.default,
    fontSize: 17,
    textTransform: "uppercase",
    color: colors.neonGreen,
  },
  quote: {
    fontWeight: fonts.default,
    fontSize: 24,
    color: colors.lightCyan,
  },
});

export default QuoteCard;

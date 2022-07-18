import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

const QuoteCard = () => {
  return (
    <VIew>
      <Text>Advice #117</Text>
      <Text>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </Text>
    </VIew>
  );
};

const styles = StyleSheet.create({
  adviceNumber: {
    color: colors.lightCyan,
  },
});

export default Card;

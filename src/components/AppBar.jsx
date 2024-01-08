import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import { Constants } from "expo-constants";
import theme from "../theme.js";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText color="white" fontWeight="bold" fontSize="subheading">
        Rate Repository App
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.appBar.primary,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  text: {
    color: theme.appBar.textPrimary,
  }
});

export default AppBar;

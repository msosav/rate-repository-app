import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = ({
  fullName,
  description,
  language,
  ownerAvatarUrl,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight="bold" fontSize="subheading">
        {fullName}
      </StyledText>
      <StyledText color="textSecondary">{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (repository) => (
  <View key={repository.id} style={styles.container}>
    <RepositoryItemHeader {...repository} />
    <RepositoryStats {...repository} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
});

export default RepositoryItem;

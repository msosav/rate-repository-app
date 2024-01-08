import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (number) => {
  return number >= 1000 ? `${Math.round(number / 100) / 10}k` : String(number);
};

const RepositoryStats = (repository) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Stars
        </StyledText>
        <StyledText align="center">
          {parseThousands(repository.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Forks
        </StyledText>
        <StyledText align="center">
          {parseThousands(repository.forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Reviews
        </StyledText>
        <StyledText align="center">{repository.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Rating
        </StyledText>
        <StyledText align="center">{repository.ratingAverage}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;

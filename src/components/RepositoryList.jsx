import React from "react";
import { FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import repositories from "../data/repositories";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repository }) => <RepositoryItem {...repository} />}
    />
  );
};

export default RepositoryList;

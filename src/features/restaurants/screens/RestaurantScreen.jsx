import React, { useState } from "react";
import styled from "styled-components/native";

import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/RestaurantInfoCard";

export const RestaurantScreen = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {/* SEARCH  */}
      <Search>
        <Searchbar
          placeholer="Search"
          onChangeText={setSearchValue}
          value={searchValue}
        />
      </Search>
      {/* List */}
      <List>
        <RestaurantInfo />
      </List>
    </>
  );
};

const Search = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

import React, { useState } from "react";
import styled from "styled-components/native";

import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { Spacer } from "../../../components/Spacer/Spacer";

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
        <RestaurantList
          data={[{}, {}]}
          renderItem={() => (
            <Spacer>
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
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

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})``;

import React, { useState } from "react";
import styled from "styled-components/native";

import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { Spacer } from "../../../components/Spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea";

export const RestaurantScreen = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeArea>
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
        <FlatList
          data={[]}
          renderItem={() => (
            <Spacer position={"bottom"} size={"large"}>
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </List>
    </SafeArea>
  );
};

const Search = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const List = styled(View)`
  flex: 1;
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

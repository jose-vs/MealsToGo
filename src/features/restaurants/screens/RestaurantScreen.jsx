import React, { useState, useContext } from "react";
import styled from "styled-components/native";

import { View, FlatList } from "react-native";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { Spacer } from "../../../components/Spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";

export const RestaurantScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

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
      {isLoading ? (
        <Loading />
      ) : (
        <List>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => (
              <Spacer position={"bottom"} size={"large"}>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
        </List>
      )}
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

const Loading = styled(ActivityIndicator)`
  flex: 1;
`;

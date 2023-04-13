import React, { useContext } from "react";
import styled from "styled-components/native";

import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { Spacer } from "../../../components/Spacer/Spacer";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { SearchBar } from "../components/SearchBar";

export const RestaurantScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <SearchBar />
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

const List = styled(View)`
  flex: 1;
`;

const Loading = styled(ActivityIndicator)`
  flex: 1;
`;

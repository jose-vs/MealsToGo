import React from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

export const SearchBar = () => {
  return (
    <View style={styles.search}>
      <Searchbar placeholer="Search" onChangeText={() => {}} value={""} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
});

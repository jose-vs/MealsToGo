import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantScreen } from "./features/restaurants/screens/RestaurantScreen";
import Maps from "./features/maps/screens/Maps";
import Settings from "./features/settings/screens/Settings";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: "ios-restaurant",
  Settings: "ios-settings",
  Maps: "map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurant" component={RestaurantScreen} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

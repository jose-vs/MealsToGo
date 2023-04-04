import React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { name as appName } from "./app.json";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantContextProvider } from "./src/services/restaurant/restaurant.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import TabNavigator from "./src/navigator";

export default function Main() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantContextProvider>
        <PaperProvider>
          <NavigationContainer>
            <TabNavigator />
            <ExpoStatusBar style="auto" />
          </NavigationContainer>
        </PaperProvider>
      </RestaurantContextProvider>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

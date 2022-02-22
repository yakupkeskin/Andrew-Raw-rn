//Navigator for pages after login.
import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Page1 from "../screens/content/Page1";
import Page3 from "../screens/content/Page3";
import Page2 from "../screens/content/Page2";
import Page4 from "../screens/content/Page4";

export default function HomeNavigator({ navigation }) {
  Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      options={{
        style: {
          height: 200,
        },
      }}
    >
      <Tab.Screen name="Page1" component={Page1} />
      <Tab.Screen name="Page2" component={Page2} />

      <Tab.Screen name="Page3" component={Page3} />

      <Tab.Screen name="Page4" component={Page4} />
    </Tab.Navigator>
  );
}

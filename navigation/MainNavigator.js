import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import Tabs from "./Tabs";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="MainTabs" component={Tabs} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
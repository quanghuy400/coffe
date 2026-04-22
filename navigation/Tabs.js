import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ label }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#888" }}>{label}</Text>
    </View>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fafafb",
          borderTopColor: "#2C2C2E",
          height: 70,
          paddingBottom: 12,
          paddingTop: 10,
        },
        tabBarActiveTintColor: "#C67C4E",
        tabBarInactiveTintColor: "#555",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        children={() => <PlaceholderScreen label="Favourite" />}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        children={() => <PlaceholderScreen label="Cart" />}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bag-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        children={() => <PlaceholderScreen label="Notification" />}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
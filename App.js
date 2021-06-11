import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image } from "react-native";
import SplashScreen from "./app/screens/SplashScreen";
import Login from "./app/screens/LoginScreen";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#0000" },
        }}
      >
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        <Stack.Screen name="LoginScreen" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

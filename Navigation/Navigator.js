import Chancho from "../Screen/Chancho";
import Chinchon from "../Screen/Chinchon";
import Escoba from "../Screen/Escoba";
import HomeScreen from "../Screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Truco from "../Screen/Truco";
import TrucoLastScores from "../Screen/TrucoLastScores";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initailRouteName="Home">
      <Stack.Screen name="Anotador de juegos de cartas" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Truco" component={Truco}></Stack.Screen>
      <Stack.Screen name="Chinchon" component={Chinchon}></Stack.Screen>
      <Stack.Screen name="Escoba" component={Escoba}></Stack.Screen>
      <Stack.Screen name="Chancho" component={Chancho}></Stack.Screen>
      <Stack.Screen name="TrucoLastScores" component={TrucoLastScores}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;

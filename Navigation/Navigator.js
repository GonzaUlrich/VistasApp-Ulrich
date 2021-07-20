import Chancho from "../Screen/Chancho";
import Chinchon from "../Screen/Chinchon";
import Escoba from "../Screen/Escoba";
import HomeScreen from "../Screen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Truco from "../Screen/Truco";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator initailRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{title: "Anotador universal"}}></Stack.Screen>
      <Stack.Screen name="Truco" component={Truco}></Stack.Screen>
      <Stack.Screen name="Chinchon" component={Chinchon}></Stack.Screen>
      <Stack.Screen name="Escoba" component={Escoba}></Stack.Screen>
      <Stack.Screen name="Chancho" component={Chancho}></Stack.Screen>
      
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;

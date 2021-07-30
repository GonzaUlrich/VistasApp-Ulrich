import {StyleSheet, Text, View} from 'react-native';

import Chancho from "../Screen/Chancho";
import Chinchon from "../Screen/Chinchon";
import ConstantColors from "../Constants/ConstantColors";
import Escoba from "../Screen/Escoba";
import HomeScreen from "../Screen/HomeScreen";
import React from "react";
import Truco from "../Screen/Truco";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
  <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style: {
                position: "absolute",
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: ConstantColors.green,
                borderRadius: 15,
                height: 90,
            }
        }}
  >

      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
      tabBarIcon: ({focused}) =>(
          <View style={styles.items}>
              <Text style={{color: focused ? '#C42B2B' : '#646464'}}>
                  Home
              </Text>
          </View>
      )
      }}
      />
      <Tab.Screen name="Truco" component={Truco} options={{
      tabBarIcon: ({focused}) =>(
          <View style={styles.items}>
              <Text style={{color: focused ? '#C42B2B' : '#646464'}}>
              Truco
              </Text>
          </View>
      )
      }}
      ></Tab.Screen>
      <Tab.Screen name="Chinchon" component={Chinchon} options={{
      tabBarIcon: ({focused}) =>(
          <View style={styles.items}>
              <Text style={{color: focused ? '#C42B2B' : '#646464'}}>
              Chinchon
              </Text>
          </View>
      )
      }}
      ></Tab.Screen>
      <Tab.Screen name="Escoba" component={Escoba} options={{
      tabBarIcon: ({focused}) =>(
          <View style={styles.items}>
              <Text style={{color: focused ? '#C42B2B' : '#646464'}}>
              Escoba
              </Text>
          </View>
      )
      }}
      ></Tab.Screen>
      <Tab.Screen name="Chancho" component={Chancho} options={{
      tabBarIcon: ({focused}) =>(
          <View style={styles.items}>
              <Text style={{color: focused ? '#C42B2B' : '#646464'}}>
              Chancho
              </Text>
          </View>
      )
      }}
      ></Tab.Screen>
  </Tab.Navigator>
    )
};

export default Tabs;


const styles = StyleSheet.create({
    items: {
        justifyContent: 'center',
        alignItems: 'center',
    },

})

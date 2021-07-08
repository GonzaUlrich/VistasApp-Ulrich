import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import ConstantColors from "../Constants/ConstantColors";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      {/*TRUCO*/}
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {navigation.navigate("Truco");}}>
          <View style={styles.buttonHome}>
            <Text style={styles.textoColor}> TRUCO </Text>
          </View>
        </TouchableHighlight>
      </View>
      {/*Chinchon*/}
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {navigation.navigate("Chinchon");}}>
        <View style={styles.buttonHome}>
          <Text style={styles.textoColor}> CHINCHON </Text>
        </View>
      </TouchableHighlight>
      </View>
      {/*Escoba*/}
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {navigation.navigate("Escoba");}}>
        <View style={styles.buttonHome}>
          <Text style={styles.textoColor}> ESCOBA </Text>
        </View>
      </TouchableHighlight>
      </View>
      {/*Chancho*/}
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {navigation.navigate("Chancho");}}>
        <View style={styles.buttonHome}>
          <Text style={styles.textoColor}> CHANCHO</Text>
        </View>
      </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop:10,
    flexDirection: "row",
    flexWrap: "wrap",
    width: Dimensions.get("window").width ,
    backgroundColor: ConstantColors.beige,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: 10,
  },
  buttonHome: {
    height: Dimensions.get("window").height / 8,
    width:  Dimensions.get("window").width  / 3,
    backgroundColor: ConstantColors.pink,
    justifyContent: "center",
    alignItems: "center",
  },
  textoColor: {
    color: ConstantColors.white,
  },
});

export default HomeScreen;

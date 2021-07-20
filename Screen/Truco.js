import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';

import ConstantColors from '../Constants/ConstantColors';
import React from 'react';
import { useState } from 'react';

const Truco = ({ navigation }) => {
    const [equipo1, setEquipo1] = useState(0);
    const sumEquipo1= () => setEquipo1(equipo1+1);
    const [equipo2, setEquipo2] = useState(0);
    const sumEquipo2= () => setEquipo2(equipo2+1);

    return(
        <View style={styles.screen}>
            <View style={styles.game}>
                <View style={styles.container}>
                    <Pressable onPress={sumEquipo1}>
                        <View style={styles.buttonGame}>
                            <Text style={styles.textoColor}> Equipo 1 </Text>
                        </View>
                    </Pressable>
                    <Text>{equipo1}</Text>
                </View>

                <View style={styles.container}>
                    <Pressable onPress={sumEquipo2}>
                        <View style={styles.buttonGame}>
                            <Text style={styles.textoColor}> Equipo 2 </Text>
                        </View>
                    </Pressable>
                    <Text>{equipo2}</Text>
                </View>
            </View>

            
                {/*
                <View style={styles.container}>
                <Pressable onPress={() => {navigation.navigate("TrucoLastScores")}}>
                    <View style={styles.buttonResults}>
                        <Text style={styles.textoColor}> Resultados anteriores </Text>
                    </View>
                </Pressable>
                </View>
                */}
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width ,
        backgroundColor: ConstantColors.beige,
    },
    game:{
        flexDirection: "row",
        height: Dimensions.get("window").height / 1.2,
    },
    container: {
        margin: 10,
        alignItems: 'center',
    },
    buttonGame:{
        height: Dimensions.get("window").height / 15,
        width:  Dimensions.get("window").width / 2.5,
        backgroundColor: ConstantColors.pink,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonResults: {
        height: Dimensions.get("window").height / 15,
        width:  Dimensions.get("window").width ,
        backgroundColor: ConstantColors.pink,
        justifyContent: "center",
        alignItems: "center",
    },

    textoColor: {
        color: ConstantColors.white,
    },
});

export default Truco;
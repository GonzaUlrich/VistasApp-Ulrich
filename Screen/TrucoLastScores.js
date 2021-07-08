import {ScrollView, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const TrucoLastScores = () => {
    return(
        <View style={styles.screen}>
            <ScrollView>
                <Text>Equipo 1: 30 vs Equipo 2: 24</Text>
                <Text>Equipo 1: 6  vs Equipo 2: 30</Text>
                <Text>Equipo 1: 10 vs Equipo 2: 30</Text>
                <Text>Equipo 1: 30 vs Equipo 2: 12</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TrucoLastScores;
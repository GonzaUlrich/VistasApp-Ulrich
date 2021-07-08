import {StyleSheet, Text, View,} from 'react-native';

import React from 'react';

const Escoba = () => {
    return(
        <View style={styles.screen}>
            <Text>Truquito</Text>
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

export default Escoba;
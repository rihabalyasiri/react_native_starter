import React from 'react';
import { View, Text, StyleSheet } from "react-native";


const FlexScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>FlexScreen</Text>
            <Text style={styles.textStyle}>FlexScreen</Text>
            <Text style={styles.textStyle}>bnbnb</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        alignItems: "center",
        flexDirection:"row"
    },
    textStyle: {
        borderWidth: 3,
        borderColor: "red",
    }
})

export default FlexScreen;
import React, {useReducer } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + action.payload };
        case "decrement":
            return { ...state, counter: state.counter - action.payload };
        default:
            return;
    }

};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter : 0})

    return (
        <View>
            <Button title="Increment" onPress={() => dispatch( {type: "increment", payload: 1}) } />
            <Button title="Decrement" onPress={() => dispatch( {type: "decrement", payload: 1}) } />
            
            <Text>Counter Count: { state.counter}</Text>
        </View>
    )
};

export default CounterScreen;
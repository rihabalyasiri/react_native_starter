import React, {useState} from "react";
import { Text, View , TextInput, StyleSheet} from "react-native";


const NameScreen = () => {
    const [name, setName] = useState("")
    return (
        <View>
            <Text>Enter password</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)} />
            { name.length < 5?  <Text style={styles.error}>Password musst be longer than 5 Characters</Text>: null }
           
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    },
    error: {
        color: "red"
    }
});

export default NameScreen;
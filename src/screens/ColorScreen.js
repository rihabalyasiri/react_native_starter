import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
    console.log(colors);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => setColors([...colors, randomColor()])}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <View style={{ height: 100, width:100, backgroundColor: item }}></View>}
      />
      <View></View>
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;

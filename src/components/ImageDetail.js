import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {

  return (
    <View>
      <Text>{props.titel}</Text>
      <Text>Image Score - {props.score }</Text>
      <Image source={props.imageSrc} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;

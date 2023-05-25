import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    
    return (
        <View>
            <ImageDetail
                titel="forest"
                imageSrc={require('../../assets/images/forest.jpg')}
                score="7" />
            
            <ImageDetail
                titel="beach"
                imageSrc={require('../../assets/images/beach.jpg')}
                score="8" />
            
            <ImageDetail
                titel="mountain"
                imageSrc={require('../../assets/images/mountain.jpg')}
                score="9" />
        </View>
       
    )
};

const styles = StyleSheet.create({

});

export default ImageScreen; 
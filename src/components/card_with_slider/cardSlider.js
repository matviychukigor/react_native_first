import React from 'react';
import { View } from 'react-native';
import Card from "../card/card";
import Carousel from "../carousel/carousel";

const CardSlider = () => {
    return(
        <View>
            <Carousel/>
            <Card/>
        </View>
    )
}

export default CardSlider;
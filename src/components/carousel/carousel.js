import React, { useState } from 'react';
import styles from "./style";
import { View, ScrollView, Image, Text } from 'react-native';
import { Gate, Gate2 } from "../../../img/index";

const Carousel = () => {
    const images = [Gate, Gate2, Gate];
    const [activeCarousel, setActiveCarousel] = useState(0);

    const change = (event) => {
        const slide = Math.ceil(event.nativeEvent.contentOffset.x  / event.nativeEvent.layoutMeasurement.width);
        if(slide !== activeCarousel){
        setActiveCarousel(slide);
        }
    }

    return(
        <View style={styles.carousel}>
            <ScrollView 
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}  
            >
                {
                images.map((item, index) => (
                    <Image pagingEnable key={index} source={item} style={styles.carousel_img}/>
                ))
                }
            </ScrollView>
            <View style={{flexDirection: "row", position: "absolute", bottom: 0, alignSelf: "center"}}>
                {images.map((i, k) => (
                    <Text key={k} style={k === activeCarousel ? styles.dot : styles.dotActive}>⬤</Text>
                ))}
            </View>
        </View>
    )   
}

export default Carousel;
import React from 'react';
import styles from "./style";
import { View } from 'react-native';
import Detail from "../detail/detail";
import Buttons from "../card_buttons/buttons";
import Descriptions from "../description_card/description";
import Rating from "../rating/rating";

const Card = () => {
    return(
        <View style={styles.card_descr}>
            <Rating/>
            <Descriptions/>
            <Buttons/>
            <Detail/>        
        </View>
    )
}

export default Card;
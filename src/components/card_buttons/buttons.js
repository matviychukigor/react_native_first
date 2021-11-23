import React, { useState } from 'react';
import styles from "./style";
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardButtons = () => {
    const [ star, setStar ] = useState(true)

    return(
        <View style={styles.buttons_box}>
            <TouchableOpacity onPress={() => (setStar(!star))}><Icon name="star" style={star ? styles.star : styles.star_active}></Icon></TouchableOpacity>
            <TouchableOpacity style={styles.start_btn}><Text style={styles.star_txt}>start</Text></TouchableOpacity>
            <TouchableOpacity><Icon name="share-alt" style={{fontSize: 33}}></Icon></TouchableOpacity>
        </View>
    )
}

export default CardButtons;
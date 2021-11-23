import React from 'react';
import styles from "./style";
import { Text, TouchableOpacity } from 'react-native';

const Detail = () => {
    return(
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.detail_text}>See details</Text>
        </TouchableOpacity>
    )
}

export default Detail;
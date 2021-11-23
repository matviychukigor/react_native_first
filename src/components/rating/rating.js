import React from 'react';
import styles from "./style";
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rating = () => {
    return(
        <View style={styles.rating}>
            <Text style={styles.rating_text}>Sightseeng tour</Text>
            <TouchableOpacity><Icon name="star" style={styles.star}></Icon></TouchableOpacity>
            <TouchableOpacity><Icon name="star" style={styles.star}></Icon></TouchableOpacity>
            <TouchableOpacity><Icon name="star" style={styles.star}></Icon></TouchableOpacity>
            <TouchableOpacity><Icon name="star" style={styles.star}></Icon></TouchableOpacity>
            <TouchableOpacity><Icon name="star" style={{fontSize: 20, color: "#DBDBDB"}}></Icon></TouchableOpacity>
        </View>
    )
}

export default Rating;
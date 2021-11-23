import React from 'react';
import styles from "./style";
import { Text, View } from 'react-native';

const Descriptions = () => {
    return(
        <View>
            <View style={styles.card_header}>
                <Text style={styles.card_headerText}>North Shore City Sight</Text>
                <Text style={styles.card_headerText}>Walking Tour</Text>
            </View>
            <View style={styles.card_description}>
                <Text style={styles.card_descrText}>North Beach • 5 hours • 6 stops</Text>
                <Text style={styles.card_descrText}>123 miles • budget ~$20</Text>
            </View>
        </View>
    )
}

export default Descriptions;
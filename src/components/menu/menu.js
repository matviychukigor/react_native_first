import React, { useState } from 'react';
import styles from "./style";
import { View, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Play, Avatar } from "../../../img/index";


const Menu = () => {
    const [ heart, setHeart ] = useState(true)

    return(
        <View style={styles.menu}>
            <TouchableOpacity><Icon name="search" style={styles.menu_icons}></Icon></TouchableOpacity>
            <TouchableOpacity onPress={() => (setHeart(!heart)) }><Icon name="heart" style={heart ? styles.menu_icons : styles.menu_icons_active}></Icon></TouchableOpacity>
            <TouchableOpacity><Image style={{marginRight: 36}} source={Play}/></TouchableOpacity>
            <TouchableOpacity><Image style={{borderRadius: 50}} source={Avatar}/></TouchableOpacity>
        </View>
    )
}

export default Menu;
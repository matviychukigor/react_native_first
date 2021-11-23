import React from 'react';
import styles from "./style";
import { Text, View, Image } from 'react-native';
import { OneImage, SecondImage, ThreeImage, FourImage } from "../../../img/index";

const Header = () => {
    return(
        <View style={styles.header}>
          <View style={styles.text_wrapper}>
            <Text style={styles.text}>Tropa.io</Text>
          </View>
          <View style={styles.img_wrapper}>
            <Image source={OneImage}/>
            <Image source={SecondImage} />
            <Image source={ThreeImage}/>
            <Image source={FourImage}/>
          </View>
        </View>
    )
}

export default Header;
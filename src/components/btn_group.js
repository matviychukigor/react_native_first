import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Mother } from "../../img/index";

const ButtonGroup = ({ buttons }) => {
    const [clickedId, setClickedId] = useState(-1);
    return (
      <>
        {buttons.map((buttonLabel, i) => (
        <TouchableOpacity onPress={() => (setClickedId(i))} key={i} name={buttonLabel} style={i === clickedId ?  styles.active : styles.text_back}>
            {buttonLabel.img ? (
                <View style={styles.mother}>
                <Image
                source={Mother}
                style={styles.mother_img}
                />
                <Text style={styles.text_pricin}>Kids friendly</Text>
            </View>
            ) : (<Text style={styles.text_pricin}>{buttonLabel.text}</Text>)}
        </TouchableOpacity>
        ))}
      </>
    );
};

const styles = StyleSheet.create({
    text_back:{
        backgroundColor: "#ED0B34",
        borderRadius: 20,
        paddingVertical: 6, 
        paddingHorizontal: 13,
        marginHorizontal: 1
    },
    text_pricin:{
        color: "#FFFFFF",
        letterSpacing: 0.02,
        lineHeight: 20,
        fontSize: 16,
        fontWeight: "600"
    },
    mother: {
        flexDirection: "row"
    },
    mother_img: {
        marginRight: 8
    },
    active: {
        backgroundColor: "#ED0B34",
        borderRadius: 20,
        paddingVertical: 6, 
        paddingHorizontal: 13,
        marginHorizontal: 1,
        backgroundColor: 'rgba(0,0,0,0.32)',
    }
})

export default ButtonGroup;
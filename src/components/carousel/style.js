import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carousel: {
        marginHorizontal: 8,
        marginTop: 16,
    },
    carousel_img: {
        width: 359, 
        resizeMode: "cover", 
        borderTopRightRadius: 40, 
        borderTopLeftRadius: 40
    },
    dot: { 
        color: "red", 
        fontSize: 7, 
        marginBottom: 12, 
        marginRight: 8 
    },
    dotActive: { 
        color: "#FFFFFF", 
        fontSize: 7, 
        marginBottom: 12, 
        marginRight: 8 
    },
})

export default styles;
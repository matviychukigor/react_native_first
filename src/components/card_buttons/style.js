import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttons_box: { 
        flexDirection: "row", 
        marginTop: 12, 
        justifyContent: "center", 
        alignItems: "center"
    },
    start_btn: {
        backgroundColor: "#2AB009", 
        marginHorizontal: 17, 
        borderRadius: 40, 
        justifyContent: "center", 
        alignItems: "center", 
        width: 231, 
        height: 64
    },
    star_txt: {
        color: "#FFFFFF", 
        letterSpacing: -0.04, 
        fontSize: 20, 
        textTransform: "uppercase",
    },
    star: {
        fontSize: 33, 
        color: "#DBDBDB"
    },
    star_active: {
        fontSize: 33, 
        color: "#FFFF00"
    }
})

export default styles;
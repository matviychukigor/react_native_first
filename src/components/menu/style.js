import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menu: {
        flexDirection: "row", 
        justifyContent: "center",
        alignItems: "center",
        position: "absolute", 
        bottom: 60, 
        alignSelf: "center", 
        backgroundColor: "#FFFFFF" , 
        width: 264, 
        height: 72, 
        borderRadius: 72,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    menu_icons: {
        color: "#DBDBDB", 
        fontSize: 28,
        marginRight: 36
    },
    menu_heart_active: {
        color: "#ED0B34", 
        fontSize: 28,
        marginRight: 36
    },
    menu_search_active: {
        color: "#000000", 
        fontSize: 28,
        marginRight: 36   
    }
})

export default styles;
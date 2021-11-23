import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rating: {
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    rating_text: {
        marginRight: 12, 
        fontSize: 11,
        color: "#808080",
        textTransform: "uppercase"
    },
    star: {fontSize: 20, color: "#2AB009", marginRight: 4}
})

export default styles;
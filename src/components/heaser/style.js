import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 44,
    },
    text_wrapper: {
        backgroundColor: '#2AB009',
        width: 173,
        height: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 34,
        lineHeight: 48,
        letterSpacing: -0.04,
        textTransform: "uppercase",
        color: "#FFFFFF",
    },
    img_wrapper: {
        flexDirection: "row"
    },   
})

export default styles;
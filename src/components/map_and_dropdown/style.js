import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    map_block: {
        marginHorizontal: 8,
        flexDirection: "row",
    },
    dropdown_one: {
        height: 66,
        width: 240,
        borderRadius: 28,
    },
    dropdown_two: {
        height: 66,
        width: 240,
        backgroundColor: "#FFFFFF",
        borderRadius: 28,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    dropdown_text: {
        color: "#062F25",
        fontSize: 20,
        fontWeight: "600",
        marginRight: 5
    },
})

export default styles;
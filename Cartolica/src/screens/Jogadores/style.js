import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerNomePosicao: {
        alignItems: "center",
        margin: 15,
    },
    textPosicao: {
        fontSize: 20,
        fontWeight: "bold",
    },
    containerJogador: {
        backgroundColor: "#DCDCDC",
        padding: 30,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    playerContent: {
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    disableButton: {
        width: 80,
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#A9A9A9",
        alignItems: "center",
        justifyContent: "center",
    },
    addButton: {
        width: 80,
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#3CB371",
        alignItems: "center",
        justifyContent: "center",
    },
    removeButton: {
        width: 80,
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    textAddButton: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold",
    },
    textName: {
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default styles;
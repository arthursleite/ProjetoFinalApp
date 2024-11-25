import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    content: {
        backgroundColor: "#C7662B",
        borderRadius: 12,
        // opacity: 0.5,
        width: "85%",
        height: "30%",
    },
    teamContent: {
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
    },
    imageTeam: {
        height: "120%",
        width: "15%",
        // height: 56,
        // width: 56,
    },
    namesContent: {
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    nameTeam: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    nameManager: {
        fontSize: 14,
        opacity: 0.5,
        fontWeight: "bold",

        // color: "#fff",
    },
    pointsContainer: {
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
    },
    pointsContent: {
        padding: 10,
        // backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    labelPoints: {
        fontWeight: "bold",
        opacity: 0.5,
    },
    points: {
        fontWeight: "bold",
        fontSize: 32,
        color: "#fff",
    },
    market: {
        paddingTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    textMarket: {
        opacity: 0.5,
        fontWeight: "bold",
    },
    buttonContainer: {
        marginTop: 10,
        width: "85%",
        height: "8%",
    },
    buttonLineup: {
        width: "100%",
        height: "100%",
        padding: 10,
        borderRadius: 12,
        backgroundColor: "#3CB371",
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonLineup: {
        color: "#fff",
        fontSize: 20,
    },
});

export default styles;
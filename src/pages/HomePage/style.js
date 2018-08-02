import {StyleSheet} from "react-native";

const menuStyles = StyleSheet.create({
    menuBox: {
        position: "relative",
        paddingTop: 26,
        paddingBottom: 12,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgb(51, 51, 51)",
    },
});
const myAssetStyles = StyleSheet.create({
    modalBgBox: {
        width: "94%",
        marginTop: 16,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 12,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .64,
        shadowRadius: 16,
        overflow: "hidden",
    },
    modalBgImg: {
        marginLeft: -12,
        marginTop: -12,
    },
    myAssetBox: {
        position: "relative",
        marginTop: -92,
        paddingBottom: 25,
        paddingTop: 15,
    },
    myAssetDetaliIcon: {
        position: "absolute",
        right: 0,
        top: 0,
    },
    myAssetTitle: {
        textAlign: "center",
        fontSize: 14,
        lineHeight: 28,
        color: "#fff",
    },
    myAssetNum: {
        textAlign: "center",
        fontSize: 32,
        lineHeight: 45,
        color: "#fff",
    },
});
const assetStyles = StyleSheet.create({
    modalBgBox: {
        position: "relative",
        width: "94%",
        marginTop: 16,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .64,
        shadowRadius: 16,
        overflow: "hidden",
    },
    assetLogoBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
    },
    logoIconBox: {
        marginRight: 5,
    },
    logoName: {
        fontSize: 16,
    },
    logoUidBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logoUid: {
        fontSize: 14,
        marginRight: 5,
    },
    assetConBox: {
        marginTop: 16,
    },
    assetConInfo: {
        fontSize: 13,
        color: "rgb(245, 203, 72)",
        lineHeight: 18,
        textAlign: "center",
    },
    assetConNum: {
        fontSize: 32,
        color: "rgb(245, 203, 72)",
        lineHeight: 45,
        textAlign: "center",
    },
    assetConNumByCny: {
        fontSize: 13,
        color: "rgb(245, 203, 72)",
        lineHeight: 18,
        textAlign: "center",
    },
    assetConEffectiveVoting: {
        marginTop: 8,
        fontSize: 13,
        color: "rgb(170, 170, 170)",
        lineHeight: 18,
        textAlign: "center",
    },
    assetConAllVoting: {
        marginTop: 4,
        fontSize: 13,
        color: "rgb(170, 170, 170)",
        lineHeight: 18,
        textAlign: "center",
    },
    btnBox: {
        marginTop: 16,
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btn: {
        width: 148,
        height: 44,
        borderRadius: 22,
    },
    voteBtn: {
        shadowColor: "rgb(245, 203, 72)",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .32,
        shadowRadius: 8,
    },
    voteBtnText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 44,
    },
    receiveBtn: {
        borderWidth: 1,
        borderColor: "rgba(245, 203, 72, .4)",
    },
    receiveBtnText: {
        color: "rgb(245, 203, 72)",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 44,
    },
});
const assetWithNoProfitStyles = StyleSheet.create({
    modalBgBox: {
        position: "relative",
        width: "94%",
        marginTop: 16,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .64,
        shadowRadius: 16,
        overflow: "hidden",
    },
    assetLogoBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
    },
    logoIconBox: {
        marginRight: 5,
    },
    logoName: {
        fontSize: 16,
        lineHeight: 22,
    },
    assetConBox: {
        marginTop: 16,
    },
    assetConNoProfit: {
        fontSize: 32,
        color: "rgb(245, 203, 72)",
        lineHeight: 45,
        textAlign: "center",
    },
    assetConMinVoteNum: {
        fontSize: 13,
        color: "rgb(245, 203, 72)",
        lineHeight: 18,
        textAlign: "center",
    },
    btnBox: {
        marginTop: 16,
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        width: 148,
        height: 44,
        borderRadius: 22,
        shadowColor: "rgb(245, 203, 72)",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .32,
        shadowRadius: 8,
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 44,
    },
});
const assetWithNoOnLineStyles = StyleSheet.create({
    modalBgBox: {
        position: "relative",
        width: "94%",
        marginTop: 16,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 10,
        backgroundColor: "rgb(17, 17, 17)",
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .64,
        shadowRadius: 16,
        overflow: "hidden",
    },
    assetLogoBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
    },
    logoIconBox: {
        marginRight: 5,
    },
    logoName: {
        fontSize: 16,
        color: "rgb(255, 255, 255)",
        lineHeight: 22,
    },
    assetConBox: {
        marginTop: 16,
    },
    assetConExpect: {
        fontSize: 32,
        color: "rgb(245, 203, 72)",
        lineHeight: 45,
        textAlign: "center",
    },
    assetConComingSoon: {
        fontSize: 13,
        color: "rgb(245, 203, 72)",
        lineHeight: 18,
        textAlign: "center",
    },
    btnBox: {
        marginTop: 16,
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        width: 148,
        height: 44,
        borderWidth: 1,
        borderColor: "rgba(245, 203, 72, .4)",
        borderRadius: 22,
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .64,
        shadowRadius: 8,
    },
    btnText: {
        color: "rgb(245, 203, 72)",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 44,
    },
});

export {
    menuStyles,
    myAssetStyles,
    assetStyles,
    assetWithNoProfitStyles,
    assetWithNoOnLineStyles
};
import {StyleSheet} from "react-native";

const menuStyles = StyleSheet.create({
    menuBox: {
        position: "relative",
        marginTop: 10,
        paddingTop: 16,
        paddingBottom: 12,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuText: {
        lineHeight: 22,
        fontSize: 16,
        color: "rgb(245, 203, 72)",
    },
});
const conStyles = StyleSheet.create({
    conBox: {
        position: "relative",
        marginTop: 8,
        paddingLeft: 24,
        paddingRight: 24,
    },
    conTitleBox: {
        position: "relative",
        marginTop: 14,
    },
    conTitleText: {
        lineHeight: 41,
        fontSize: 34,
        color: "rgb(245, 203, 72)",
    },
    conItemBox: {
        position: "relative",
        marginTop: 24,
    },
    conItemLabelBox: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    conItemLabel: {
        lineHeight: 18,
        fontSize: 13,
        color: "rgb(245, 203, 72)",
    },
    conItemTextInputBox: {
        position: "relative",
        marginTop: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    conItemTextInputLabelBox: {
        flexGrow: 0,
        marginRight: 8,
        borderRadius: 4,
        overflow: "hidden",
    },
    conItemTextInputLabel: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 13,
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(245, 203, 72)",
    },
    conItemTextInput: {
        fontSize: 18,
        lineHeight: 36,
        flexGrow: 1,
        color: "rgb(245, 203, 72)",
    },
    conItemCaptchaImgBox: {
        height: 50,
        width: 150,
        backgroundColor: "rgba(255, 255, 255, .8)",
    },
    conItemUnderLineBox: {
        position: "relative",
        marginTop: 2,
        height: 1,
        backgroundColor: "rgba(245, 203, 72, .4)",
    },
    conBtnBox: {
        position: "relative",
        marginTop: 18,
    },
    conBtn: {
        height: 44,
        borderRadius: 22,
        shadowColor: "rgb(245, 203, 72)",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: .32,
        shadowRadius: 8,
    },
    conBtnText: {
        color: "#515151",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 44,
    },
    conItemFooterBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 18,
    },
    conItemGotoLoginMsnBox: {
        lineHeight: 18,
        textAlign: "left",
        fontSize: 13,
        fontWeight: "600",
        color: "rgb(245, 203, 72)",
    },
    conItemGetBackPassWordBox: {
        lineHeight: 18,
        textAlign: "right",
        fontSize: 13,
        fontWeight: "600",
        color: "rgb(245, 203, 72)",
    },
});
export { menuStyles, conStyles };

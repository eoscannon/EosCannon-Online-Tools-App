// 引入公共组件
import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, Image, Dimensions } from "react-native";
import {connect} from "react-redux";

class Toast extends Component {
    constructor (props) {
        super(props);
        this.state = {
            top: new Animated.Value(-100),
        };
    }
    myAnimated = () => {
        Animated.sequence([
            Animated.timing(
                this.state.top,
                { toValue: 0, duration: 500, }
            ),
            Animated.delay(2000),
            Animated.timing(
                this.state.top,
                { toValue: -100, duration: 500, }
            )
        ]).start();
    };
    componentDidUpdate() {
        this.myAnimated();
    }
    render() {
        const { isShow, type, msg} = this.props.option;
        const isShowStyle = isShow ? {display: "flex"} : {height: 0,opacity: 0};
        const bgColor = type == "success" ? {backgroundColor: "rgb(35, 190, 190)"} : {backgroundColor: "rgb(255, 100, 100)"};
        const icon = type == "success" ? require("./images/toastSuccess.png") : require("./images/toastFail.png");
        return (
            <Animated.View style={[styles.mainBox, {top: this.state.top}, isShowStyle, bgColor]}>
                <View style={styles.conBox}>
                    <Image style={styles.conIcon} source={icon} />
                    <Text style={styles.conText}>{msg}</Text>
                </View>
            </Animated.View>
        );
    }
}

// 挂载中间件到组件；
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}
function mapStateToProps(state) {
    return {
        option: state.ToastReducer.option,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Toast);

const styles = StyleSheet.create({
    mainBox: {
        position: "absolute",
        width: Dimensions.get("window").width,
        zIndex: 101,
    },
    conBox: {
        position: "relative",
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        height: 94,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    conIcon: {
        marginRight: 16,
    },
    conText: {
        flex: 1,
        fontSize: 16,
        color: "rgb(255, 255, 255)",
    },
});

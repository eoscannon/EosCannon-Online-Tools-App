// 引入公共组件
import React, { Component } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

export default class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render() {
        let source = null;
        switch(this.props.icon) {
        case "user":
            source = require("./user.png");
            break;
        case "lock":
            source = require("./lock.png");
            break;
        case "bit":
            source = require("./bitcoin.png");
            break;
        default:
            source = require("./user.png");
        }
        return (
            <View style={styles.BodyBox}>
                <Text style={styles.TextLabel}>{this.props.required ? (<Text style={styles.TextRequired}>*</Text>) : ""}{this.props.label}：</Text>
                <TextInput
                    style={styles.Input}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#aaa"
                    selectionColor="#111"
                    value={this.props.defaultValue}
                    onChange={this.props.onChange}
                    underlineColorAndroid="transparent"
                />
                <Image style={styles.TextIcon} source={source}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    BodyBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    TextLabel: {
        flexBasis: "25%",
        textAlign: "left",
        lineHeight: 40,
        fontSize: 14,
        color: "#222",
    },
    TextRequired: {
        paddingRight: 6,
        fontSize: 14,
        color: "#f5222d"
    },
    Input: {
        width: "75%",
        height: 40,
        paddingRight: 10,
        paddingLeft: 26,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#fff",
        borderColor: "#eee",
        borderWidth: 1,
        borderRadius: 4,
        textAlign: "left",
        lineHeight: 40,
        fontSize: 14,
        color: "#222",
    },
    TextIcon: {
        position: "absolute",
        left: "26.5%",
        width: 16,
        height: 16,
    },
});

// 引入公共组件
import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default class Select extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isModalShow: false,
            value: "",
        };
    }

    onSelect = (val) => {
        this.setState({
            isModalShow: false,
            value: val,
        });
    };

    render() {
        console.log(this.state.value);
        return (
            <View style={styles.BodyBox}>
                <Text style={styles.TextLabel}>{this.props.required ? (<Text style={styles.TextRequired}>*</Text>) : ""}{this.props.label}：</Text>
                <View style={styles.TextInput}>
                    <TouchableOpacity style={styles.TextTextBox} onPress={() => this.setState({isModalShow: !this.state.isModalShow})}>
                        {this.state.value ? (
                            <Text style={styles.TextInputValue}>{this.state.value}</Text>
                        ) : (
                            <Text style={styles.TextInputPlaceholder}>{this.props.placeholder}</Text>
                        )}
                    </TouchableOpacity>
                    <Image style={styles.TextIcon} source={require("./user.png")}/>
                </View>
                {this.state.isModalShow ? (
                    <View style={styles.ModalBox}>
                        <ScrollView style={styles.ModalScrollViewBox}>
                            {this.props.options.map((item, index) => (
                                <View style={styles.ItemBox} key={index}>
                                    <Text style={styles.ItemCon} onPress={() => this.onSelect(item)}>{item}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    BodyBox: {
        position: "relative",
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
    TextInput: {
        position: "relative",
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    TextIcon: {
        position: "absolute",
        left: 5,
        top: 12,
        width: 16,
        height: 16,
    },
    TextTextBox: {
        flexBasis: "100%",
    },
    TextInputValue: {
        fontSize: 14,
        color: "#222",
    },
    TextInputPlaceholder: {
        fontSize: 14,
        color: "#aaa",
    },
    ModalBox: {
        position: "absolute",
        top: 40,
        right: 0,
        width: "75%",
        height: "auto",
        zIndex: 101,
    },
    ModalScrollViewBox: {
        flexBasis: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#fff",
    },
    ItemBox: {
        flexBasis: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    ItemCon: {
        flexBasis: "100%",
        fontSize: 14,
        color: "#222",
        lineHeight: 40,
    },
});

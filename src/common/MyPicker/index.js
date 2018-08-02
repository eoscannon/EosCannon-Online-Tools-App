// 引入公共组件
import React, { Component } from "react";
import {connect} from "react-redux";
import {StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, Picker, Dimensions, Platform, FlatList} from "react-native";

class MyPicker extends Component {
    constructor (props) {
        super(props);
        this.state = {
            pickerValue: "",
            title: "选择账号",
            myPickers: [],
        };
    }
    componentWillReceiveProps(nextProps) {
        const { PickerItems, selectedValue } = nextProps.option;
        const myPickers = [];
        PickerItems.forEach((item, index) => {
            myPickers.push({name: item, id: index, isSelected: selectedValue == item});
        });
        this.setState({
            pickerValue: selectedValue,
            title: nextProps.option.title ? nextProps.option.title : "选择账号",
            myPickers,
        });
    }
    componentWillMount() {
        this.onPickerCancel();
    }
    componentDidMount() {
        const { selectedValue } = this.props.option;
        this.props.dispatch({ type: "PICKER_SELECTEDVALUE_REDUCER", data: selectedValue });
    }
    onPickerConfirm = () => {
        let pickerValue = this.state.pickerValue;
        if (Platform.OS == "android") {
            for (let i = 0; i<this.state.myPickers.length; i++) {
                if (this.state.myPickers[i].isSelected) {
                    pickerValue = this.state.myPickers[i].name;
                    break;
                }
            }
        }
        this.props.dispatch({ type: "PICKER_SELECTEDVALUE_REDUCER", data: pickerValue });
        this.onPickerCancel();
    };
    onPickerCancel = () => {
        const pickerOption = {
            isShow: false,
            PickerItems: [],
            selectedValue: "",
        };
        this.props.dispatch({ type: "PICKER_ACTION_REDUCER", data: pickerOption });
    };
    radioClick = (item) => {
        this.state.myPickers.forEach((i, index) => {
            this.state.myPickers[index].isSelected = false;
        });
        this.state.myPickers[item.id].isSelected = !item.isSelected;
        const myPickers = this.state.myPickers;
        this.setState({
            myPickers,
        });

    };
    FlatListRenderItem = (item) => {
        const color = item.isSelected ? {color: "rgb(245, 203, 72)"} : {color: "rgb(51,51,51)"};
        const icon = item.isSelected ? require("./images/checked.png") : require("./images/unchecked.png");
        return (
            <TouchableOpacity key={item.id} onPress={() => this.radioClick(item)} style={styles.PickerItemBox}>
                <Text style={[styles.PickerItemText, color]}>{item.name}</Text>
                <Image style={styles.PickerItemIcon} source={icon}></Image>
            </TouchableOpacity>
        );
    };
    render() {
        const { isShow, PickerItems } = this.props.option;
        const mainBoxShowStyle = isShow ? {display:"flex"} : {height: 0,opacity: 0};
        return (
            <View style={[styles.mainBox, mainBoxShowStyle]}>
                <View style={styles.conBox}>
                    <View style={styles.titleBox}>
                        <Text style={styles.TitleCancelText} onPress={this.onPickerCancel}>取消</Text>
                        <Text style={styles.TitleText}>{this.state.title}</Text>
                        <Text style={styles.TitleConfirmText} onPress={this.onPickerConfirm}>确定</Text>
                    </View>
                    {Platform.OS == "ios" ? (
                        <Picker
                            style={styles.PickerBox}
                            selectedValue={this.state.pickerValue}
                            onValueChange={(pickerValue) => this.setState({pickerValue})}>
                            {PickerItems.map((item, index, arr) => (
                                <Picker.Item key={index} label={item} value={item} />
                            ))}
                        </Picker>
                    ) : (
                        <ScrollView style={styles.PickerBox}>
                            {this.state.myPickers.map((item) => this.FlatListRenderItem(item))}
                        </ScrollView>
                    )}
                </View>
            </View>
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
        option: state.MyPickerReducer.option,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPicker);

const styles = StyleSheet.create({
    mainBox: {
        position: "absolute",
        top: 0,
        left: 0,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        zIndex: 101,
        backgroundColor: "rgba(0,0,0,.4)",
    },
    conBox: {
        position: "absolute",
        bottom: 0,
        left: 0,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "rgb(255,255,255)",
    },
    titleBox: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    TitleCancelText: {
        fontSize: 14,
        lineHeight: 30,
        color: "rgb(51,51,51)",
    },
    TitleText: {
        fontSize: 14,
        lineHeight: 30,
        color: "rgb(51,51,51)",
    },
    TitleConfirmText: {
        fontSize: 14,
        lineHeight: 30,
        color: "rgb(51,51,51)",
    },
    PickerBox: {
        position: "relative",
        height: 180,
        paddingBottom: 12,
        width: Dimensions.get("window").width,
    },
    PickerItemBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 26,
    },
    PickerItemText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "rgb(51,51,51)",
        lineHeight: 36,
    },
    PickerItemIcon: {
        width: 16,
        height: 16,
    },
});

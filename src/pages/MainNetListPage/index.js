// 引入公共组件
import React, { Component } from "react";
import {connect} from "react-redux";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Menu from "../../Components/Menu";

// 自定义组件
import { mainStyles } from "./style";

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            ActionsArray: [
                {
                    actionName: "获取初始化信息",
                    disabled: false,
                    url: "MainNetGetInfoPage",
                },
                {
                    actionName: "发送报文",
                    disabled: false,
                    url: "MainNetSendMessagePage",
                },

            ],
        };
    }

    render() {
        return (
            <ScrollView style={mainStyles.BodyBox}>
                <Menu title="功能列表" goBack={this.props.navigation.goBack} />
              {/*
               <Text style={mainStyles.BodyTitle}>签名发送工具</Text>
               */}
                <View style={mainStyles.ContentBox}>
                    {this.state.ActionsArray.map((item, index) => (
                        <View style={mainStyles.ItemBox} key={index}>
                            {item.disabled ? (
                                <View style={mainStyles.ButtonDisableBox}>
                                    <Text style={mainStyles.ButtonDisableText}>{item.actionName}</Text>
                                </View>
                            ) : (
                                <TouchableOpacity style={mainStyles.ButtonBox} onPress={() => {this.props.navigation.navigate(item.url);}}>
                                    <Text style={mainStyles.ButtonText}>{item.actionName}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

// 挂载中间件到组件；
function mapDispatchToProps(dispatch) {
    return {
        onDispatchToastAction: (data) => dispatch({ type: "TOAST_ACTION_REDUCER", data }),
    };
}

function mapStateToProps(state) {
    return {
        allAsset: state.HomePageReducer.allAsset,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

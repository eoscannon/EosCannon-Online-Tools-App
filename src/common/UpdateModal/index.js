// 引入公共组件
import React, { Component } from "react";
import {StyleSheet, Modal, Text, View, TouchableOpacity, Dimensions, Linking, Platform, NetInfo} from "react-native";
import {connect} from "react-redux";

class UpdateModal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShowNoUpdate: props.isShowNoUpdate || false,
            cancleCallback: props.cancleCallback || (() => {}),
            modalVisible: false,
            isUpdate: false,
            isForceUpdate: false,
            isWifi: false,
            downLoadUrl: "",
            newVersionName: "",
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.appVersionData != this.props.appVersionData) {
            this.isNeedUpdate(nextProps);
        }
        // NetInfo.getConnectionInfo().then((connectionInfo) => {
        //     console.log(connectionInfo);
        //     this.setState({isWifi: (connectionInfo.type == "wifi" || connectionInfo.type == "WIFI")});
        // });
    }
    componentWillMount() {
        // 发起请求
        const data = {
            platform: Platform.OS,
        };
        this.props.onDispatchGetAppVersionPost(data);
    }

    isHadShowToday = () => {
        if (this.props.from && this.props.from == "homepage") {
            global.isHadShowToday = true;
        } else {
            global.isHadShowToday = false;
        }
    };

    // 判断更新
    isNeedUpdate = (props) => {
        const { version_code, version_name, isforce, download } = props.appVersionData;
        const appVersion = 100000;
        const isUpdate = appVersion < version_code;
        const modalVisible = (isUpdate && !global.isHadShowToday) || (!isUpdate && this.state.isShowNoUpdate);
        this.setState({
            modalVisible,
            isUpdate,
            isForceUpdate: isforce,
            downLoadUrl: download,
            newVersionName: version_name,
        });
        // 计算今日是否已经提示过更新
        this.isHadShowToday();
    };

    // 取消更新
    ModalCancleHandle = () => {
        this.setState({
            modalVisible: false,
        });
        this.state.cancleCallback();
    };

    // 下载更新
    ModalDownHandle = () => {
        Linking.canOpenURL(this.state.downLoadUrl).then(supported => {
            supported ? Linking.openURL(this.state.downLoadUrl) : console.log("不支持下载更新");
        }).catch(err => {
            console.log(err);
        });
        this.state.cancleCallback();
    };

    // 获取更新描述组件
    getUpdateDescBoxComp = () => {
        const updateDesc = (
            <View style={styles.descBox}>
                <Text style={styles.title}>检测到最新版本 {this.state.newVersionName}</Text>
                {this.state.isWifi ? <Text/> : (
                    <View>
                        <Text style={styles.desc}>温馨提示：请在Wi-Fi环境下更新</Text>
                        <Text style={styles.desc}>土豪随意</Text>
                    </View>
                )}
            </View>
        );
        const updateNoDesc = (
            <View style={styles.descBox}>
                <Text style={styles.title}>已经是最新版本</Text>
            </View>
        );
        return (this.state.isUpdate ? updateDesc : updateNoDesc);
    };

    // 获取更新按钮组件
    getUpdateButtonBoxComp = () => {
        const updateNormalButton = (
            <View style={styles.footerBox}>
                <TouchableOpacity style={{flex: 1}} onPress={this.ModalCancleHandle}>
                    <Text style={styles.footerCancle}>稍后更新</Text>
                </TouchableOpacity>
                <Text style={styles.footerFlg}></Text>
                <TouchableOpacity style={{flex: 1}} onPress={this.ModalDownHandle}>
                    <Text style={styles.footerDown}>立即更新</Text>
                </TouchableOpacity>
            </View>
        );
        const updateForceButton = (
            <View style={styles.footerBox}>
                <TouchableOpacity style={{flex: 1}} onPress={this.ModalDownHandle}>
                    <Text style={styles.footerDown}>立即更新</Text>
                </TouchableOpacity>
            </View>
        );
        const updateNoButton = (
            <View style={styles.footerBox}>
                <TouchableOpacity style={{flex: 1}} onPress={this.ModalCancleHandle}>
                    <Text style={styles.footerDown}>确定</Text>
                </TouchableOpacity>
            </View>
        );
        return (this.state.isUpdate ? (this.state.isForceUpdate ? updateForceButton : updateNormalButton) : updateNoButton);
    };
    render() {
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {}}
            >
                <View style={styles.mainBox}>
                    <View style={styles.conBox}>
                        {this.getUpdateDescBoxComp()}
                        {this.getUpdateButtonBoxComp()}
                    </View>
                </View>
            </Modal>
        );
    }
}

// 挂载中间件到组件；
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onDispatchGetAppVersionPost: (data) => dispatch({ type: "UPDATE_GETAPPVERSION_POST", data }),
    };
}
function mapStateToProps(state) {
    return {
        state,
        appVersionData: state.UpdateModalReducer.appVersionData,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateModal);

const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    conBox: {
        width: (Dimensions.get("window").width > 300 ? 300 : Dimensions.get("window").width),
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    descBox: {
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingTop: 16,
        paddingBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "rgb(51, 51, 51)",
        textAlign: "center",
        lineHeight: 22,
    },
    desc: {
        paddingTop: 8,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 13,
        color: "rgb(51, 51, 51)",
        lineHeight: 18,
        textAlign: "center",
    },
    footerBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    footerCancle: {
        fontSize: 16,
        color: "rgb(245, 203, 72)",
        lineHeight: 54,
        textAlign: "center",
    },
    footerFlg: {
        width: 1,
        height: 54,
        backgroundColor: "#eee",
    },
    footerDown: {
        fontSize: 16,
        fontWeight: "bold",
        color: "rgb(245, 203, 72)",
        lineHeight: 54,
        textAlign: "center",
    },
});

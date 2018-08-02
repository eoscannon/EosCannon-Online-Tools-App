// 引入公共组件
import React, { Component } from "react";
import {connect} from "react-redux";
import { ScrollView, View, SafeAreaView, Text, Toast, WebView, Platform } from "react-native";
import QRCode from "react-native-qrcode";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// 自定义组件
import { mainStyles } from "./style";
import Alert from "../../Components/Alert";
import Menu from "../../Components/Menu";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";
import TextInput from "../../Components/TextInput";
import Select from "../../Components/Select";

class TransferPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            code: "http://eoscannon.io",
            expiration: ''
        };
    }

    componentWillMount() {
        //this.props.onDispatchGetInfoAction()
    }

    componentDidMount() {
        setTimeout(()=>{
            this.onGetTransaction()
        },3000)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.navigation.state.params) {
            const { jsonInfo } = nextProps.navigation.state.params;
            console.log(jsonInfo);
            if (jsonInfo) {
                this.setState({
                    jsonInfo,
                });
            }
        }
    }

    openCamera = () => {};
    onMessage = (e) => {
        console.log('onMessag====', e.nativeEvent.data)
        this.setState({
            expiration:  e.nativeEvent.data,
            code: e.nativeEvent.data,
        })
    };
    onRead = (res) => {
        console.log(res);
    };
    onGetTransaction = () => {
        this.refs.WebView.postMessage("11");
        //this.refs.WebView.postMessage(JSON.stringify(this.state.expiration));
    };
    render() {
        const info = this.props.infoMessage || ''
        return (
            <KeyboardAwareScrollView style={{backgroundColor: "#fafafa"}}>
                <View style={{flex:1,height:0,zIndex:-999999,position:"absolute"}}>
                    {Platform.OS === "ios" ? (
                      <WebView
                        ref="WebView"
                        style={{height:0,width:0,backgroundColor:"transparent"}}
                        source={require("./MainNetInitPage.html")}
                        onMessage={(e)=>{this.onMessage(e);}}
                        javaScriptEnabled={true}
                        mixedContentMode="always"
                      />
                    ) : (
                      <WebView
                        ref="WebView"
                        style={{height:0,width:0,backgroundColor:"transparent"}}
                        source={{uri: "file:///android_asset/MainNetInitPage.html", baseUrl:"file:///android_asset/lib/"}}
                        onMessage={(e)=>{this.onMessage(e);}}
                        javaScriptEnabled={true}
                        mixedContentMode="always"
                      />
                    )}
                </View>
                <Menu title="信息初始化" goBack={this.props.navigation.goBack} />
                <ScrollView style={mainStyles.BodyBox}>

                    <View style={mainStyles.FromItem}>
                        <Alert title="此页面在线使用" Description="将下方信息粘贴至EOSCannon离线签名工具中,或使用离线工具扫描二维码。"/>
                    </View>

                    <SafeAreaView style={mainStyles.FromItem}>
                        <View>
                            <Text>EOS区块高度:</Text>
                            <Text>aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906</Text>
                        </View>
                    </SafeAreaView>
                    <View style={mainStyles.FromItem}>
                        <TextArea text={this.state.expiration} placeholder="请扫码获取Block字段"/>
                    </View>

                     <View style={mainStyles.FromItem}>
                     <QRCode
                     value={this.state.code || ''}
                     size={300}
                     bgColor='black'
                     fgColor='white'/>
                     </View>

                    <View style={{height: 150}}/>
                </ScrollView>
            </KeyboardAwareScrollView>
        );
    }
}

// 挂载中间件到组件；
function mapDispatchToProps(dispatch) {
    return {
        onDispatchToastAction: (data) => dispatch({ type: "TOAST_ACTION_REDUCER", data }),
        onDispatchGetInfoAction: (data) => dispatch({ type: "ACTION_GETINFO_POST", data }),
    };
}

function mapStateToProps(state) {
    return {
        infoMessage: state.MainNetGetInfoPageReducer.infoMessage
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransferPage);

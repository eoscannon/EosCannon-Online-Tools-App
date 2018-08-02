// 引入公共组件
import React, { Component } from "react";
import {connect} from "react-redux";
import { ScrollView, View, SafeAreaView, Text, Toast, TouchableOpacity, Platform, WebView } from "react-native";
//import QRCode from "react-native-qrcode";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// 自定义组件
import { mainStyles } from "./style";
import Alert from "../../Components/Alert";
import Menu from "../../Components/Menu";
import Button from "../../Components/Button";
import TextArea from "../../Components/TextArea";
import TextInput from "../../Components/TextInput";
import Select from "../../Components/Select";

class MainNetSendMessagePage extends Component {
    static navigationOptions = ( props ) => {
        return {
            title: "发送报文"
        };
    };
    constructor (props) {
        super(props);
        this.state = {
            code: "",
            expiration: '',
            jsonInfo:''
        };
    }

    componentWillMount() {
        //this.props.onDispatchGetInfoAction()
    }

    componentDidMount() {

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
    sendMessage = () => {
        console.log('=====')
        this.refs.WebView.postMessage(this.state.jsonInfo);

    };

    openCamera=()=>{
        this.props.navigation.navigate("Scanner")
    }

    onMessage = (e) => {
        console.log('onMessag====', e.nativeEvent.data)
        this.setState({
            code: e.nativeEvent.data,
        })
        if(JSON.parse(e.nativeEvent.data).code){
            alert('success')
        }
    };
    render() {
        return (
            <KeyboardAwareScrollView style={{backgroundColor: "#fafafa"}}>
                <View style={{flex:1,height:0,zIndex:-999999,position:"absolute"}}>
                    {Platform.OS === "ios" ? (
                      <WebView
                        ref="WebView"
                        style={{height:0,width:0,backgroundColor:"transparent"}}
                        source={require("./MainNetSendMessagePage.html")}
                        onMessage={(e)=>{this.onMessage(e);}}
                        javaScriptEnabled={true}
                        mixedContentMode="always"
                      />
                    ) : (
                      <WebView
                        ref="WebView"
                        style={{height:0,width:0,backgroundColor:"transparent"}}
                        source={{uri: "file:///android_asset/MainNetSendMessagePage.html", baseUrl:"file:///android_asset/lib/"}}
                        onMessage={(e)=>{this.onMessage(e);}}
                        javaScriptEnabled={true}
                        mixedContentMode="always"
                      />
                    )}
                </View>
                <Menu title="发送报文" goBack={()=>this.props.navigation.goBack} />
                <ScrollView style={mainStyles.BodyBox}>
                    <View style={mainStyles.FromItem}>
                        <Text>下面粘贴已签名的交易报文，并发送：</Text>
                    </View>

                    <SafeAreaView style={mainStyles.FromItem}>
                        <View style={mainStyles.FromItem}>
                            <Button name="打开摄像头" onPress={this.openCamera} Disable={true} />
                        </View>
                    </SafeAreaView>
                    <View style={mainStyles.FromItem}>
                        <Text>{this.state.jsonInfo}</Text>
                    </View>
                    <View>

                    </View>
                    {/*
                     <View style={mainStyles.FromItem}>
                     <QRCode
                     value={this.state.code}
                     size={200}
                     bgColor='purple'
                     fgColor='white'/>
                     </View>
                     */}

                    <View style={mainStyles.FromItem}>
                        <Button name="发送报文"  Disable={true} onPress={this.sendMessage}/>
                    </View>
                    <View style={{height: 150}}/>
                </ScrollView>
            </KeyboardAwareScrollView>
        )
    }
}

// 挂载中间件到组件；
function mapDispatchToProps(dispatch) {
    return {
        onDispatchToastAction: (data) => dispatch({ type: "TOAST_ACTION_REDUCER", data }),
        onDispatchSendInfoAction: (data) => dispatch({ type: "ACTION_SENDINFO_POST", data }),
    }
}

function mapStateToProps(state) {
    return {
        infoMessage: state.MainNetSendMessagePageReducer.infoMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNetSendMessagePage);

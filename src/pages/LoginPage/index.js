// 引入公共组件
import React, { Component } from "react";
import {connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import md5 from "crypto-js/md5";

// 引入自定义组件
import Toast from "../../common/Toast";
import { menuStyles, conStyles } from "./style";
import { isPhoneNumber } from "../../utils/util";
import service from "../../utils/service";

class LoginPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            CaptchaUrl: "",
            mobile: "",
            captcha: "",
            password: "",
            IsShowLoginBackBtn: this.props.navigation.state.params.isShowBackBtn,
            TextInputSecureText: "显示",
            TextInputSecureTextEntry: true,
            TextInputAutoFocus: false,
        };
    }
    componentWillMount() {
        this.getCaptchaUrl();
    }
    getCaptchaUrl = () => {
        const nowTime = new Date();
        const CaptchaUrl = service.ENVOption[service.ENV] + service.API.UserRegGetCaptcha + "?_flg=" + nowTime.getTime();
        this.setState({
            CaptchaUrl,
        });
    };
    sendLoginPost = () => {
        if (this.isInputValid()) {
            const data = {
                mobile: this.state.mobile,
                password: md5(this.state.password).toString(),
                captcha: this.state.captcha,
                nav: this.props.navigation,
            };
            this.props.onDispatchSendLoginPost(data);
        }
    };
    isInputValid = () => {
        let phoneValid = false;
        let passwordValid = false;
        let captchaValid = false;

        const mobile = this.state.mobile;
        const password = this.state.password;
        const captcha = this.state.captcha;
        if (mobile && isPhoneNumber(mobile)) {
            phoneValid = true;
        } else {
            const toastOption = {
                isShow: true,
                type: "fail",
                msg: "手机号不能为空或者格式不正确！",
            };
            this.props.onDispatchToastAction(toastOption);
        }
        if (password) {
            passwordValid = true;
        } else {
            const toastOption = {
                isShow: true,
                type: "fail",
                msg: "密码不能为空！",
            };
            this.props.onDispatchToastAction(toastOption);
        }
        if (captcha && captcha.length >= 4) {
            captchaValid = true;
        } else {
            const toastOption = {
                isShow: true,
                type: "fail",
                msg: "验证码不能为空或者格式不正确！",
            };
            this.props.onDispatchToastAction(toastOption);
        }
        return phoneValid && passwordValid && captchaValid;
    };
    showPassWord = () => {
        const TextInputSecureTextEntry = !this.state.TextInputSecureTextEntry;
        const TextInputSecureText = TextInputSecureTextEntry ? "显示" : "隐藏";
        this.setState({
            TextInputSecureTextEntry,
            TextInputSecureText,
        });
    };
    render() {
        return (
            <KeyboardAwareScrollView style={{position: "relative", flexBasis: "100%", backgroundColor: "rgb(51, 51, 51)"}}>
                <Toast/>
                <View style={menuStyles.menuBox}>
                    {this.state.IsShowLoginBackBtn ?  <TouchableOpacity onPress={() => {this.props.navigation.goBack();}}>
                        <Image source={require("../../images/allBack.png")} />
                    </TouchableOpacity> : <View/>}
                    <TouchableOpacity onPress={() => {this.props.navigation.replace("LoginPageByMsn", {isShowBackBtn: true});}}>
                        <Text style={menuStyles.menuText}>短信登录</Text>
                    </TouchableOpacity>
                </View>
                <View style={conStyles.conBox}>
                    <View style={conStyles.conTitleBox}>
                        <Text style={conStyles.conTitleText}>密码登录</Text>
                    </View>
                    <View style={conStyles.conItemBox}>
                        <View style={conStyles.conItemLabelBox}>
                            <Text style={conStyles.conItemLabel}>手机号</Text>
                        </View>
                        <View style={conStyles.conItemTextInputBox}>
                            <View style={conStyles.conItemTextInputLabelBox}>
                                <Text style={conStyles.conItemTextInputLabel}>+86</Text>
                            </View>
                            <TextInput
                                style={conStyles.conItemTextInput}
                                placeholder="请输入您的手机号!"
                                autoFocus={this.state.TextInputAutoFocus}
                                placeholderTextColor={"rgba(245, 203, 72, .4)"}
                                maxLength={11}
                                keyboardType="numeric"
                                onChangeText={(mobile) => this.setState({mobile})}
                                underlineColorAndroid={"transparent"}
                            />
                        </View>
                        <View style={conStyles.conItemUnderLineBox}></View>
                    </View>
                    <View style={conStyles.conItemBox}>
                        <View style={conStyles.conItemLabelBox}>
                            <Text style={conStyles.conItemLabel}>密码</Text>
                            <Text style={conStyles.conItemLabel} onPress={this.showPassWord}>{this.state.TextInputSecureText}</Text>
                        </View>
                        <View style={conStyles.conItemTextInputBox}>
                            <TextInput
                                style={conStyles.conItemTextInput}
                                placeholder="请输入密码!"
                                secureTextEntry={this.state.TextInputSecureTextEntry}
                                placeholderTextColor={"rgba(245, 203, 72, .4)"}
                                onChangeText={(password) => this.setState({password})}
                                underlineColorAndroid={"transparent"}
                            />
                        </View>
                        <View style={conStyles.conItemUnderLineBox}></View>
                    </View>
                    <View style={conStyles.conItemBox}>
                        <View style={conStyles.conItemLabelBox}>
                            <Text style={conStyles.conItemLabel}>验证码</Text>
                        </View>
                        <View style={conStyles.conItemTextInputBox}>
                            <TextInput
                                style={conStyles.conItemTextInput}
                                placeholder="请输入验证码!"
                                placeholderTextColor={"rgba(245, 203, 72, .4)"}
                                maxLength={4}
                                onChangeText={(captcha) => this.setState({captcha})}
                                underlineColorAndroid={"transparent"}
                            />
                            <TouchableOpacity onPress={this.getCaptchaUrl}>
                                <Image style={conStyles.conItemCaptchaImgBox} source={{uri: this.state.CaptchaUrl}} />
                            </TouchableOpacity>
                        </View>
                        <View style={conStyles.conItemUnderLineBox}></View>
                    </View>
                    <View style={conStyles.conItemBox}>
                        <View style={conStyles.conBtnBox}>
                            <TouchableOpacity onPress={this.sendLoginPost}>
                                <LinearGradient style={conStyles.conBtn} colors={["rgb(245, 203, 72)", "rgb(255, 180, 0)"]}>
                                    <Text style={conStyles.conBtnText}>立即登录</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={conStyles.conItemFooterBox}>
                            {/*<TouchableOpacity onPress={() => {this.props.navigation.replace("LoginPageByMsn", {isShowBackBtn: true});}}>*/}
                            {/*<Text style={conStyles.conItemGotoLoginMsnBox}>使用短信登录 》 </Text>*/}
                            {/*</TouchableOpacity>*/}
                            <View/>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

// 挂载中间件到组件；
function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onDispatchSendLoginPost: (data) => dispatch({ type: "LOGIN_LOGIN_POST", data }),
        onDispatchToastAction: (data) => dispatch({ type: "TOAST_ACTION_REDUCER", data }),
    };
}
function mapStateToProps(state) {
    return {
        state,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

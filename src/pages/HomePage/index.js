// 引入公共组件
import React, { Component } from "react";
import {connect} from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import {ScrollView, View, Text, Image, TouchableOpacity, Dimensions, Platform} from "react-native";
//import SplashScreen from "rn-splash-screen";

// 自定义组件
import Toast from "../../common/Toast";
import UpdateModal from "../../common/UpdateModal";
import { menuStyles, myAssetStyles, assetStyles, assetWithNoProfitStyles, assetWithNoOnLineStyles } from "./style";
import { storage } from "../../utils/storage";

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    goMainPage=()=>{
        console.log('111')
        this.props.navigation.navigate("MainNetListPage");
    }

    render() {
        return (
            <View style={{position: "relative", flexBasis: "100%", backgroundColor: "rgb(51, 51, 51)", minHeight: Dimensions.get("window").height}}>
                <Toast/>
                <UpdateModal from="homepage"/>
                <View style={menuStyles.menuBox}>
                    <View>
                        {/*<TouchableOpacity onPress={() => {this.props.navigation.navigate("NoticeCenterPage");}}>*/}
                        {/*<Image source={require("./images/homePage_notice_normal.png")} />*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                    <View>
                        <Image source={require("./images/homepageNavbarLogo.png")} />
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require("./images/homepageMe.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{backgroundColor: "rgb(51, 51, 51)"}}>
                    <View>
                        <TouchableOpacity onPress={this.goMainPage}>
                            <LinearGradient style={myAssetStyles.modalBgBox} colors={["rgb(245, 203, 72)", "rgb(255, 180, 0)"]}>
                                <Image style={myAssetStyles.modalBgImg} source={require("./images/homepageAssetsBgLogo.png")}></Image>
                                <View style={myAssetStyles.myAssetBox}>
                                    {this.props.allAsset.assets.length > 0 ? (
                                      <TouchableOpacity style={myAssetStyles.myAssetDetaliIcon}  >
                                          <Image source={require("./images/homepageAssetsDetali.png")}></Image>
                                      </TouchableOpacity>
                                    ) : null}
                                    <Text style={myAssetStyles.myAssetNum}>主网</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <LinearGradient style={myAssetStyles.modalBgBox} colors={["rgb(245, 203, 72)", "rgb(255, 180, 0)"]}>
                            <Image style={myAssetStyles.modalBgImg} source={require("./images/homepageAssetsBgLogo.png")}></Image>
                            <View style={myAssetStyles.myAssetBox}>
                                {this.props.allAsset.assets.length > 0 ? (
                                    <TouchableOpacity style={myAssetStyles.myAssetDetaliIcon}  >
                                        <Image source={require("./images/homepageAssetsDetali.png")}></Image>
                                    </TouchableOpacity>
                                ) : null}
                                <Text style={myAssetStyles.myAssetNum}>测试网</Text>
                            </View>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

// 挂载中间件到组件；
function mapDispatchToProps(dispatch) {
    return {
        onDispatchGetAllAssetPost: () => dispatch({ type: "HOME_GETALLASSET_POST" }),
        onDispatchToastAction: (data) => dispatch({ type: "TOAST_ACTION_REDUCER", data }),
    };
}

function mapStateToProps(state) {
    return {
        allAsset: state.HomePageReducer.allAsset,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

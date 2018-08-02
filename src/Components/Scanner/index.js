import React, {Component} from "react";
import {StyleSheet, TouchableOpacity, Image, View} from "react-native";
import {QRscanner} from "react-native-qr-scanner";

export default class Scanner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
         setTimeout(() => {
             this.onRead();
         }, 1000);
    }
    render() {
        return (
          <View style={styles.container}>
              <TouchableOpacity onPress={() => {this.props.navigation.goBack();}}>
                  <Image style={styles.CloseIcon} source={require("./close.png")}/>
              </TouchableOpacity>
              <QRscanner onRead={this.onRead} finderY={50}/>
          </View>
        )
    }

    onRead = (res) => {
        const jsonInfo = JSON.stringify( {"expiration":"2018-07-23T16:31:38","refBlockNum":64400,"refBlockPrefix":3802453534,"chainId":"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"});
        //const jsonInfo = res.data ? res.data : {"expiration":"2018-07-23T16:31:38","refBlockNum":64400,"refBlockPrefix":3802453534,"chainId":"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"};
        this.props.navigation.navigate("MainNetSendMessagePage", {jsonInfo: jsonInfo});
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    CloseIcon: {
        position: "absolute",
        top: 30,
        left: 20,
        zIndex: 1001,
    },
});

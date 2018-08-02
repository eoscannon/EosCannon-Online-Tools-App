// 引入公共组件
import React, { Component } from "react";
import {createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import { StackNavigator } from "react-navigation";
import {EosProvider} from "react-native-eosjs";

// 引入自定义组件
import saga from "./src/utils/saga";
import reducers from "./src/utils/reducers";

// 引入自定义组件
import HomePage from "./src/pages/HomePage";
import MainNetListPage from "./src/pages/MainNetListPage";
import MainNetGetInfoPage from "./src/pages/MainNetGetInfoPage";
import MainNetSendMessagePage from "./src/pages/MainNetSendMessagePage";
import Scanner from "./src/Components/Scanner";

// 自定义变量
const Navigator = StackNavigator(
  {
    MainNetListPage: { screen: MainNetListPage },

    HomePage: { screen: HomePage },
    MainNetGetInfoPage: { screen: MainNetGetInfoPage },
    MainNetSendMessagePage: { screen: MainNetSendMessagePage },
    Scanner: { screen: Scanner },
  },
  {
    navigationOptions: {
      header: null,
    }
  }
);

const sagaMiddleware = createSagaMiddleware();
const myStore = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);
export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <Provider store={myStore}>
        <Navigator/>
      </Provider>
    );
  }
}

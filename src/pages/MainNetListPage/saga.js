import { put, call} from "redux-saga/effects";
import request from "../../utils/request";
import service from "../../utils/service";
export function* getHomeAllAsset() {
    try {
        // 组装请求数据
        const requestOption = {
            url: service.API.CoinGetListData,
            body: {
                method: "get",
            },
        };
        // 发起异步请求
        const response = yield call(request, requestOption);
        console.log(response);
        // 根据返回数据，渲染结果
        if (response.code === 0) {
            let data = {
                total: "0.00",
                assets: [],
            };
            if (response.data) {
                data = response.data;
            }
        }
    } catch (err) {}
}

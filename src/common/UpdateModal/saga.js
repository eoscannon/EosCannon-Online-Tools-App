import { put, call} from "redux-saga/effects";
import request from "../../utils/request";
import service from "../../utils/service";
export function* getUpdateAppVersion(action) {
    try {
        const requestOption = {
            url: service.API.Update + "?platform=" +action.data.platform,
            body: {
                method: "get",
            },
        };
        // 发起异步请求
        const response = yield call(request, requestOption);
        console.log(response);
        // 根据返回数据，渲染结果
        if (response.code === 0) {
            yield put({ type: "UPDATE_SETAPPVERSION_REDUCER", data: response.data });
        }
    } catch (err) {}
}

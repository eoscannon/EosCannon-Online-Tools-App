import { call, put } from "redux-saga/effects";
import request from "../../utils/request";
import service from "../../utils/service";
import { localSave } from "../../utils/storage";

export function* sendLoginPost(action) {
    try {
        console.log(action);
        // 组装请求数据
        const data = {
            mobile: action.data.mobile,
            password: action.data.password,
            captcha: action.data.captcha,
        };
        const requestOption = {
            url: service.API.UserLogin,
            body: {
                method: "POST",
                body: JSON.stringify(data),
            },
        };
        // 发起异步请求
        const response = yield call(request, requestOption);
        console.log(response);
        // 根据返回数据，渲染结果
        if (response.code === 0) {
            localSave.setLoginUserPhone(action.data.mobile);
            localSave.setLoginUserId("1");
            localSave.setLoginState(true);
            localSave.setLoginAuthorization(response.data);
            action.data.nav.replace("HomePage", {ReceiveState: false});
        } else {
            const toastOption = {
                isShow: true,
                type: "fail",
                msg: "登录失败，请重新登录！",
            };
            //yield put({ type: "TOAST_ACTION_REDUCER", data: toastOption });
        }
    } catch (err) {
        console.log(err);
        const toastOptionErr = {
            isShow: true,
            type: "fail",
            msg: "请求异常，请重新登录！",
        };
        //yield put({ type: "TOAST_ACTION_REDUCER", data: toastOptionErr });
    }
}

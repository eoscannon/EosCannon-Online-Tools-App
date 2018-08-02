import { takeLatest } from "redux-saga/effects";
import { sendLoginPost } from "../pages/LoginPage/saga";

import { getUpdateAppVersion } from "../common/UpdateModal/saga";
import { getInfoPost } from "../pages/MainNetGetInfoPage/saga";
import { sendInfoPost } from "../pages/MainNetSendMessagePage/saga";

/**
 * saga根函数，注册到store中；
 */
export default function* SagaInit() {
    yield takeLatest("LOGIN_LOGIN_POST", sendLoginPost);

    yield takeLatest("UPDATE_GETAPPVERSION_POST", getUpdateAppVersion);
    yield takeLatest("ACTION_GETINFO_POST", getInfoPost);
    yield takeLatest("ACTION_SENDINFO_POST", sendInfoPost);
}

import { combineReducers } from "redux";
import ToastReducer from "../common/Toast/reducer";
import MyPickerReducer from "../common/MyPicker/reducer";
import UpdateModalReducer from "../common/UpdateModal/reducer";
import HomePageReducer from "../pages/HomePage/reducer";
import MainNetGetInfoPageReducer from "../pages/MainNetGetInfoPage/reducer";
import MainNetSendMessagePageReducer from "../pages/MainNetSendMessagePage/reducer";

const reducers = combineReducers({
    ToastReducer,
    MyPickerReducer,
    UpdateModalReducer,
    HomePageReducer,
    MainNetGetInfoPageReducer,
    MainNetSendMessagePageReducer

});
export default reducers;

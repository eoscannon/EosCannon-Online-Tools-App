/*
 * HomeReducer
 *
 */
const initState = {
    "option": {
        isShow: false,
        type: "success",
        msg: "",
    },
};
export default function ToastReducer (state = initState, action) {
    switch (action.type) {
    case "TOAST_ACTION_REDUCER":
        return Object.assign({}, state, {
            "option": action.data
        });
    default:
        return state;
    }
}

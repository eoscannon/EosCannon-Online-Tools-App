/*
 * HomeReducer
 *
 */
const initState = {
    "option": {
        isShow: false,
        PickerItems: ["123"],
        selectedValue: "",
    },
    "PickerSelectedValue": "",
};
export default function MyPickerReducer (state = initState, action) {
    switch (action.type) {
    case "PICKER_ACTION_REDUCER":
        return Object.assign({}, state, {
            "option": action.data
        });
    case "PICKER_SELECTEDVALUE_REDUCER":
        return Object.assign({}, state, {
            "PickerSelectedValue": action.data
        });
    default:
        return state;
    }
}

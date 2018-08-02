/*
 * HomeReducer
 *
 */
const initState = {
    "appVersionData": {
        "version_code": 4111111,
        "version_name": "4.1.1",
        "isforce":true,
        "download":"https://ssxxs.com",
    },
};
export default function UpdateModalReducer (state = initState, action) {
    switch (action.type) {
    case "UPDATE_SETAPPVERSION_REDUCER":
        return Object.assign({}, state, {
            "appVersionData": action.data
        });
    default:
        return state;
    }
}

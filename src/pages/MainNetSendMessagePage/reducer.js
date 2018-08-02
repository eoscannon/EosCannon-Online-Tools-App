/*
 * HomeReducer
 *
 */
const initState = {
    allAsset: {
        total: "------",
        assets: [

        ],
    },
};

export default function MainNetGetInfoPageReducer (state = initState, action) {
    switch (action.type) {
    case "HOME_GETALLASSET_REDUCER":
        return Object.assign({}, state, {
            "allAsset": action.data
        });
    case "USER_SENDINFO_MESSAGE":
        return Object.assign({}, state, {
            "infoMessage": action.data
        });
    default:
        return state;
    }
}

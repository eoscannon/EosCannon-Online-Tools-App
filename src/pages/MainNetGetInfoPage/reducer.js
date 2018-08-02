/*
 * HomeReducer
 *
 */
const initState = {
    allAsset: {
        total: "------",
        assets: [
            {
                "asset_id": 0,
                "name": "EOS",
                "logo": "",
                "balance_reward": 0,
                "total_reward": 0,
                "effective_vote": 0,
                "assess": 0,
                "min_stake": 0,
            }
        ],
    },
};

export default function MainNetGetInfoPageReducer (state = initState, action) {
    switch (action.type) {
    case "HOME_GETALLASSET_REDUCER":
        return Object.assign({}, state, {
            "allAsset": action.data
        });
    case "USER_GETINFO_MESSAGE":
        return Object.assign({}, state, {
            "infoMessage": action.data
        });
    default:
        return state;
    }
}

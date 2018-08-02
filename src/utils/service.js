/**
 * 设置接口域名；
 * 统一管理请求接口；
 * */
const service = {
    ENV: "dev",
    ENVOption: {
        dev: "http://111.231.59.36:1101/",
        pro: "/dpos/v1/",
    },
    API: {
        UserRegGetCaptcha: "captcha/image",
        UserRegCheckCaptcha: "captcha/verify",
        UserRegSendMsn: "captcha/sms",
        UserRegCheckMsn: "captcha/checksms",
        UserGetBackPassword: "password/retrieve",
        UserReg: "signup",
        UserLogin: "login",
        UserLogout: "user/logout",
        UserPassWordUpdate: "user/password/update",
        UserResetPwCheckMsnCode: "user/checkSmsVerifyCode",
        UserResetPw: "password/update",
        UserWithdrawHistory: "user/withdraw/history",
        CoinGetListData: "user/asset",
        CoinVoteSetNode: "user/vote",
        CoinVoteInfo: "user/vote/info",
        CoinVoteNode: "vote/node",
        CoinVoteDetection: "user/vote/check",
        CoinVoteSiteInfo: "asset/wallet",
        ReceiveAssetBalance: "user/asset/balance",
        Receive: "user/asset/withdraw",
        AssetInfoGetRewardHistory: "user/reward/history",
        AssetInfoGetUidsByAssetId: "vote/node",
        Update: "version/info",
    },
};
export default service;

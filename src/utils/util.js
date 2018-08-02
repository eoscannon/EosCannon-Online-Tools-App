//import EOS from 'eosjs';
/**
 * 校验手机号
 * */
const isPhoneNumber = (phone) => {
    const regexp = new RegExp("^1[3|4|5|6|7|8][0-9]{9}$");
    let isTrue = false;
    if (phone && regexp.test(phone)) {
        isTrue = true;
    }
    return isTrue;
};
/**
 * 数字三分位
 * */
const numberStandard = (num) => {
    let newNum = Number(num).toFixed(2);
    newNum = newNum.replace(/\B(?=(?:\d{3})+\b)/g, ",").replace(/(.00)$/, "");
    return newNum;
};
const formatNum = (num) => {
    let newStr = "";
    let count = 0;
    let str = String(num);
    if (str.indexOf(".") === -1) {
        for (let i = str.length - 1; i >= 0; i -= 1) {
            if (count % 3 === 0 && count !== 0) {
                newStr = `${str.charAt(i)}, ${newStr}`;
            } else {
                newStr = str.charAt(i) + newStr;
            }
            count += 1;
        }
        // 自动补小数点后两位
        str = `${newStr}.00`;
    } else {
        for (let i = str.indexOf(".") - 1; i >= 0; i -= 1) {
            if (count % 3 === 0 && count !== 0) {
                newStr = `${str.charAt(i)}, ${newStr}`;
            } else {
                // 逐个字符相接起来
                newStr = str.charAt(i) + newStr;
            }
            count += 1;
        }
        str = newStr + (`${str}00`).substr((`${str}00`).indexOf("."), 3);
    }
    return str;
};
// formatTime
function formatTime(timeLong) {
    const date = new Date(timeLong);
    const year = date.getFullYear();
    const month = date.getMonth() > 10 ? date.getMonth() : "0" + date.getMonth();
    const day = date.getDay() > 10 ? date.getDay() : "0" + date.getDay();
    const hours = date.getHours();
    const minute = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();
    // const count = date.getSeconds() > 10 ? date.getSeconds() : "0" + date.getSeconds();
    return year + "-" + month + "-" + day + " " + hours + ":" + minute;
}
const getTransactionHeadersFromJsonInfo = jsonInfo => {
    const { refBlockNum, refBlockPrefix, expiration } = JSON.parse(jsonInfo);
    return {
        expiration,
        ref_block_num: refBlockNum,
        ref_block_prefix: refBlockPrefix,
    };
};

const getEos = () => {
    const httpEndpoint = 'https://mainnet.eoscannon.io';
    const chainId = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
    const config = {
        httpEndpoint,
        chainId,
    };

    //return Eos(config)
};
export {
    isPhoneNumber,
    numberStandard,
    formatNum,
    formatTime,
    //getEos,
};

import { put, call} from "redux-saga/effects";
import request from "../../utils/request";
import service from "../../utils/service";
import {getEos } from '../../utils/util';
export function* sendInfoPost() {
    try {
        // 组装请求数据
        //const expireInSeconds = 60 * 60; // 1 hour
        //const eos = getEos();
        //const data = eos.getInfo({}).then((info) => {
        //    const chainDate = new Date(`${info.head_block_time}Z`);
        //    const expiration = new Date(chainDate.getTime() + expireInSeconds * 1000);
        //    const expirationStr = expiration.toISOString().split('.')[0];
        //    const refBlockNum = info.last_irreversible_block_num & 0xffff;
        //    eos.getBlock(info.last_irreversible_block_num).then(block => {
        //        const refBlockPrefix = block.ref_block_prefix;
        //        const transactionHeaders = {
        //            expiration: expirationStr,
        //            refBlockNum: refBlockNum,
        //            refBlockPrefix: refBlockPrefix,
        //            chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
        //        };
        //        return transactionHeaders
        //    });
        //});
        //yield put({ type: 'USER_SENDINFO_MESSAGE', data: data });

    } catch (err) {
        //yield put({ type: 'USER_SENDINFO_MESSAGE', data: 'fail....' });

    }
}

import request from "./request";

export const reqGetDailyInform = (params) => request({
    url:'/day',
    method:'post',
    params:params,
})
export const reqGetRecentlyInform = (params) => request({
    url:'/month',
    method:'post',
    params:params,
})
export const reqGetYearInform = (params) => request({
    url:'/year',
    method:'post',
    params:params,
})

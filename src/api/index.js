import request from "./request";

export const reqCategoryList = () => request({
    url:"product/getBaseCategoryList", 
    method:"get"
})


export const reqGetDailyInform = (params) => request({
    url:'/day',
    method:'post',
    data:params,
})
export const reqGetRecentlyInform = (params) => request({
    url:'/month',
    method:'post',
    data:params,
})
export const reqGetYearInform = (params) => request({
    url:'/year',
    method:'post',
    data:params,
})

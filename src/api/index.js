import request from "./request";

export const reqCategoryList = () => request({
    url:"product/getBaseCategoryList", 
    method:"get"
})


export const reqGetSearchInfo = (params) => request({
    url:'/list',
    method:'post',
    data:params,
})
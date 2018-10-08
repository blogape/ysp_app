import request from '../utils/request.js'

// 首页轮播图
export function homebanner(){
    return request({
        url:'/api/search-service/indexBanner/list?page=1&size=10',
        method:'get',
    })
} 

// 首页视图
export function getElement(){
    return request({
        url:'/api/search-service/indexElement/indexElements',
        method:'get'
    })
}

// 食谱详情

export function product(id){
    return request({
        url:'/api/search-service/recipe/recipeDetail?recipeId='+id,
        method:'get'
    })
}
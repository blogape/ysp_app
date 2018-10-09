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

// 食谱软文

export function getArticleData(id){
    return request({
        url:'/api/search-service/recipeArticle/info?id='+id,
        method:'get'
    })
}

// 主题食谱 
export function getThemData(id){
    return request({
        url:'/api/search-service/recipeTopic/detail?topicId='+id,
        method:'get'
    })
}

// 热门食谱
export function getHotData(page){
    return request({
        url:'/api/search-service/es/hot?page='+page+'&size=10',
        method:'get'
    })
}
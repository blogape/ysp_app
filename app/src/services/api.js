import request from '../utils/request.js'

export function homebanner(){
    return request({
        url:'/api/search-service/indexBanner/list?page=1&size=10',
        method:'get',
    })
} 
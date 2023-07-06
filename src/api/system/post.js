import request from '@/utils/request'

// 查询岗位列表
export function listPost(query) {
  return request({
    url: 'http://vue.ruoyi.vip/prod-api/system/post/list',
    method: 'get',
    params: query,
    headers: {
      'Content-Type': 'application/json', // 设置请求头为JSON格式earer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImE2MzIxZmMyLTA3OWItNGZmMC04YWM3LT
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImRmZTA4MDZjLTIwMWYtNGU2Ny1iMGJmLTM4NmRmNGQzMjA4MSJ9.g3SEZ_vjk3pV3f-WyfUSQ7t9wngTgRkS1JurSbfmkY7Wak1jodxrVyrU9bmKpdpkfbzswKJdSk9nJ8f9PTtneQ' // 设置Authorization头部，用于身份验证
    }
  })
}

// 查询岗位详细
export function getPost(postId) {
  return request({
    url: '/system/post/' + postId,
    method: 'get'
  })
}

// 新增岗位
export function addPost(data) {
  return request({
    url: '/system/post',
    method: 'post',
    data: data
  })
}

// 修改岗位
export function updatePost(data) {
  return request({
    url: '/system/post',
    method: 'put',
    data: data
  })
}

// 删除岗位
export function delPost(postId) {
  return request({
    url: '/system/post/' + postId,
    method: 'delete'
  })
}

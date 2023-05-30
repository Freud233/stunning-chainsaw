import request from './axios'

export const registerUser = (data) => {
  return request({
    url: '/auth/local/register',
    method: 'post',
    data
  })
}
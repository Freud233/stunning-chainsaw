import service from "./axios";

export const getPosts = () => {
  return service({
    url: '/posts',
    method: 'get',
  })
}
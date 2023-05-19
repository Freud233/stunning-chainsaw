import service from "./axios";

export const getPosts = () => {
  return service({
    url: '/posts',
    method: 'get',
  })
}

export const getPost = (id) => {
  return service({
    url: `/posts/${id}`,
    method: 'get',
  })
}
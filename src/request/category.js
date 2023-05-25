import service from "./axios";
// 获取所有分类

export const getAllCategories = () => {
  return service({
    url: '/categories',
    method: 'get',
  })
}

export const getCategories = (id) => { 
  return service({
    url: `/categories/${id}`,
    method: 'get',
  })
}